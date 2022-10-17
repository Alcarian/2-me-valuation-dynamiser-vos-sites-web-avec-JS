// Start Declare variables

const btnRules = document.querySelector(".btn-rules");
const rulesPage = document.querySelector(".rules");
const overlay1 = document.querySelector(".overlay");
const btnCloseRules = document.querySelector(".closeRules");

// End declare variables

// Start Rules page

let closeRules = function () {
  rulesPage.classList.add("hidden");
  overlay1.classList.add("hidden");
};

btnRules.addEventListener("click", function () {
  rulesPage.classList.remove("hidden");
  overlay1.classList.remove("hidden");
});

btnCloseRules.addEventListener("click", closeRules);

overlay1.addEventListener("click", closeRules);

// End Rules page
