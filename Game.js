class Game {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.inGameScreen = document.querySelector("#inGame-screen");
    this.boardPixels = document.querySelector("#board-pixels");
    this.colorsPalette = document.querySelector("#colors-palette");
    this.controls = document.querySelector("#controls");
    this.colors = ["black", "red", "yellow", "blue", "white"];
    this.pickedColor = "";
    this.message = this.createElement("p", "paragraph", {});
    this.gridCount = 10;
    this.startUp();
  }

  startUp() {
    this.initStyles();
    this.createPixels();
    this.createPalette();
  }

  initStyles() {
    Object.assign(this.boardPixels.style, {
      gridTemplateColumns: `repeat(${this.gridCount},1fr)`,
      gridTemplateRows: `repeat(${this.gridCount},1fr)`
    });
  }

  createElement(type, className, styles) {
    const element = document.createElement(type);
    element.classList.add(className);
    Object.assign(element.style, styles);
    return element;
  }

  createPixels() {
    this.boardPixels.innerHTML = "";
    for (let i = 0; i < this.gridCount * this.gridCount; i++) {
      const pixel = this.createElement("div", "pixel", {
        width: `100%`,
        height: `100%`
      });
      this.initStyles();
      this.boardPixels.appendChild(pixel);
    }
  }

  createPalette() {
    for (let i = 0; i < this.colors.length; i++) {
      const color = this.createElement("div", "color", {
        background: this.colors[i]
      });
      this.colorsPalette.appendChild(color);
    }
    this.message.innerHTML = "Please select a color";
    this.colorsPalette.appendChild(this.message);
  }

  updateMessage() {
    this.message.innerHTML = this.pickedColor + " is selected";
  }

  updateGridSize(newCount) {
    if (!newCount) return;
    this.gridCount = newCount;
  }

  pickColor(color) {
    this.pickedColor = color;
    this.updateMessage();
  }

  startGame() {
    this.startScreen.style.display = "none";
    this.inGameScreen.style.display = "flex";
  }

  clearBoard() {
    [...this.boardPixels.children].forEach((pixel) => {
      pixel.style.background = "";
    });
  }
  returnToMain() {
    window.location.href = "/";
  }
}
