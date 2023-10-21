const startButton = document.querySelector("#start-game"),
  resetButton = document.querySelector("#reset-board"),
  returnButton = document.querySelector("#return-main"),
  undoButton = document.querySelector("#undo-fill"),
  redoButton = document.querySelector("#redo-fill"),
  gridInput = document.querySelector("#grid-size-input"),
  gridButton = document.querySelector("#grid-size-button"),
  gridCheckbox = document.querySelector("#show-hide-grid"),
  game = new Game(),
  { palette, board, colorsPalette, boardPixels } = game;

colorsPalette.addEventListener("click", ({ target }) => {
  if (target.classList.contains("color")) {
    [...colorsPalette.children].forEach((e) => e.classList.remove("active"));
    target.classList.add("active");
    if (target.type === "color") {
      target.addEventListener("input", (event) => {
        palette.pickColor(event.target.value);
        board.pickColor(event.target.value);
      });
      return;
    }
    palette.pickColor(target.style.background);
    board.pickColor(target.style.background);
  }
});

boardPixels.addEventListener("click", ({ target }) => {
  if (!board.pickedColor) return;
  if (target.classList.contains("pixel")) {
    board.fillColor(target);
  }
});

gridInput.addEventListener("input", (e) => {
  board.updateGridSize(Number(e.target.value));
});

gridButton.addEventListener("click", () => {
  board.createBoard();
});

startButton.addEventListener("click", () => {
  game.startGame();
});

resetButton.addEventListener("click", () => {
  board.clearBoard();
});

returnButton.addEventListener("click", () => {
  game.returnToMain();
});

undoButton.addEventListener("click", () => {
  board.undoFillColor();
});

redoButton.addEventListener("click", () => {
  board.redoFillColor();
});

gridCheckbox.addEventListener("input", (event) => {
  board.showHideGrid(event.target.checked);
});
