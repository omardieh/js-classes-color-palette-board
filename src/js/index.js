const startButton = document.querySelector("#start-game");
const resetButton = document.querySelector("#reset-board");
const returnButton = document.querySelector("#return-main");
const undoButton = document.querySelector("#undo-fill");
const gridInput = document.querySelector("#grid-size-input");
const gridButton = document.querySelector("#grid-size-button");
const gridCheckbox = document.querySelector("#show-hide-grid");

const game = new Game();
const { colorsPalette, boardPixels } = game;

colorsPalette.addEventListener("click", ({ target }) => {
  if (target.classList.contains("color")) {
    [...colorsPalette.children].forEach((e) => e.classList.remove("active"));
    target.classList.add("active");
    if (target.type === "color") {
      target.addEventListener("input", (event) => {
        game.pickColor(event.target.value);
      });
      return;
    }
    game.pickColor(target.style.background);
  }
});

boardPixels.addEventListener("click", ({ target }) => {
  if (!game.pickedColor) return;
  if (target.classList.contains("pixel")) {
    game.fillColor(target);
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

undoButton.addEventListener("click", () => {
  game.undoFillColor();
});

gridCheckbox.addEventListener("input", (event) => {
  game.showHideGrid(event.target.checked);
});
