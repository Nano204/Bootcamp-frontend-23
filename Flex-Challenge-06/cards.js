/////Cards creation
function cardHtml(card) {
  const { title, stars, image, attribute, type, description, AP, DP } = card;
  const cardHtml = document.createElement("div");
  cardHtml.className = "cardBound";
  cardHtml.innerHTML = `
        <div class="cardTitleMark">
          <p>${title}</p>
          <img src="images/EARTH.png" alt="Attribute image" style="max-width: 25px";/>
        </div>
        <div class="cardStarsSpace">
        ${starsHtml(stars)}
        </div>
        <div class="cardImage">
          <img class="mainImage" src=${image} alt="${image} image" />
        </div>
        <div class="cardDetailsSpace">
          <p class="cardType">[${type}]</p>
          <p class="cardDescription">
          ${description}
          </p>
          <div class="cardStats">
            <p>ATK/${AP}</p>
            <p>DEF/${DP}</p>
          </div>
        </div>
    `;

  return cardHtml;
}

function starsHtml(stars) {
  const starsHtmlArray = [];
  for (let index = 0; index < stars; index++) {
    const star = `<img src="images/Starball_Red.svg.png" alt="Star image" style="max-width: 25px; margin: 2px" />`;
    starsHtmlArray.push(star);
  }
  const starsHtml = starsHtmlArray.join("");
  return starsHtml;
}

function renderCards(cards) {
  const cardsContainer = document.querySelector(".cardsContainer");
  cards.map((card) => cardsContainer.append(cardHtml(card)));
}

//////Cards getting from API
const cardsId = [
  "89631142",
  "39674352",
  "95788410",
  "38999506",
  "56649609",
  "39111158",
  "65957473",
  "89189982",
  "92176681",
  "76232340",
];

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response);
    }
  });
}

function getFromAPI(cardId) {
  const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardId}`;
  return loadJson(url)
    .then((response) => {
      const resposeData = response.data[0];
      const card = {
        title: resposeData.name,
        stars: resposeData.level,
        image: `https://images.ygoprodeck.com/images/cards_cropped/${cardId}.jpg`,
        attribute: resposeData.attribute,
        type: resposeData.race,
        description: resposeData.desc,
        AP: resposeData.atk,
        DP: resposeData.def,
      };
      return renderCards([card]);
    })
    .catch((err) => {
      throw err;
    });
}

cardsId.map((cardId) => {
  getFromAPI(cardId);
});