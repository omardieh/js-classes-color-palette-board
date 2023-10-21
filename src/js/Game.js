class Game {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.inGameScreen = document.querySelector("#in-game-screen");
    this.boardPixels = document.querySelector("#board-pixels");
    this.colorsPalette = document.querySelector("#colors-palette");
    this.colorMessage = document.querySelector("#color-message");
    this.pickedColor = "";
    this.board = new Board(
      this.boardPixels,
      this.pickedColor,
      this.createElement
    );
    this.palette = new Palette(
      this.colorsPalette,
      this.pickedColor,
      this.colorMessage,
      this.createElement
    );
    this.startUp();
  }

  startUp() {
    this.board.createBoard();
    this.palette.createPalette();
  }

  createElement(type, className, styles) {
    const element = document.createElement(type);
    element.classList.add(className);
    Object.assign(element.style, styles);
    return element;
  }

  startGame() {
    this.startScreen.style.display = "none";
    this.inGameScreen.style.display = "flex";
  }

  returnToMain() {
    window.location.reload();
  }
}
