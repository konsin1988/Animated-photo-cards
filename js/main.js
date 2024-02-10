const card = document.getElementsByClassName("card");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

card1.onclick = function () {
  activeCard(card1);
};
card2.onclick = function () {
  activeCard(card2);
};
card3.onclick = function () {
  activeCard(card3);
};

function activeCard(card) {
  card.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (!card.contains(e.target)) {
      card.classList.remove("active");
    }
  });
}
