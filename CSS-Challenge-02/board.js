//////Cards getting from API
const cardsIdP1 = ["89631142", "39674352", "95788410", "38999506", "56649609"];
const cardsIdP2 = ["39111158", "65957473", "89189982", "92176681", "76232340"];

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
      return cardHtml(card);
    })
    .catch((err) => {
      throw err;
    });
}

/////Cards creation
function cardHtml(card) {
  const { title, stars, image, attribute, type, description, AP, DP } = card;
  const cardHtml = document.createElement("div");
  cardHtml.className = "cardBound";
  cardHtml.innerHTML = `
        <div class="cardTitleMark">
          <p>${title}</p>
          <img src="images/EARTH.png" alt="Attribute image" style="max-width: 15%";/>
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
    const star = `<img src="images/Starball_Red.svg.png" alt="Star image" style="max-width: 5%; margin: 2px" />`;
    starsHtmlArray.push(star);
  }
  const starsHtml = starsHtmlArray.join("");
  return starsHtml;
}

function renderCards(cardsId, player) {
  cardsId.map((cardId, index) => {
    const cardsSpace = document.querySelector(`.mainZone`);
    getFromAPI(cardId).then((response) => {
      response.style.gridArea = `2/${index + 1}`;
      response.classList.add = "zone";
      cardsSpace.append(response);
    });
  });
}

window.onload = () => {
  renderCards(cardsIdP1, 1);
  // renderCards(cardsIdP2, 2);
};
