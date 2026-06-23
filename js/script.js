const searchInput = document.getElementById("playerSearch");
const playerCards = document.querySelectorAll(".player-card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    playerCards.forEach(function (card) {
      const cardText = card.textContent.toLowerCase();

      if (cardText.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}