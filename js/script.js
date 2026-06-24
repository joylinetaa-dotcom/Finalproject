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



const membershipForm = document.getElementById("membershipForm");
const formMessage = document.getElementById("formMessage");

if (membershipForm) {
  membershipForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const team = document.getElementById("team").value;

    if (fullName === "" || email === "" || phone === "" || team === "") {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Application submitted successfully!";
      formMessage.style.color = "green";
      membershipForm.reset();
    }
  });
}