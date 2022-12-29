function specialZoneHtml(cardType) {
  const specialZoneHtml = document.createElement("div");
  specialZoneHtml.className = "specialField";
  const image = "";
  specialZoneHtml.innerHTML = `
    <img class="cardTypeImage" src=${image} alt="${image} image" />
      `;
  return specialZoneHtml;
}

const specialZones = ["Deck","Graveyard", "Pendulum", "Pendulum", "SideDeck", "Field", "Banished"]

function renderSpecialZones(specialZones) {
    const board = document.querySelector(".board");
    specialZones.map((zone) => board.append(specialZoneHtml(zone)));
  }