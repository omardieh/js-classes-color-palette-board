const startButton = document.querySelector("#start-game");
const resetButton = document.querySelector("#reset-board");
const returnButton = document.querySelector("#return-main");
const gridInput = document.querySelector("#grid-size-input");
const gridButton = document.querySelector("#grid-size-button");

let game = new Game();
const { colorsPalette, boardPixels } = game;

colorsPalette.addEventListener("click", ({ target }) => {
  if (target.classList.contains("color")) {
    [...colorsPalette.children].forEach((e) => e.classList.remove("active"));
    target.classList.add("active");
    game.pickColor(target.style.background);
  }
});

boardPixels.addEventListener("click", ({ target }) => {
  if (!game.pickedColor) return;
  if (target.classList.contains("pixel")) {
    target.style.background = game.pickedColor;
  }
});

gridInput.addEventListener("input", (e) => {
  game.updateGridSize(Number(e.target.value));
});

gridButton.addEventListener("click", () => {
  game.createPixels();
});

startButton.addEventListener("click", () => {
  game.startGame();
});

resetButton.addEventListener("click", () => {
  game.clearBoard();
});

returnButton.addEventListener("click", () => {
  game.returnToMain();
});
