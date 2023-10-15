class Game {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.inGameScreen = document.querySelector("#inGame-screen");
    this.boardPixels = document.querySelector("#board-pixels");
    this.colorsPalette = document.querySelector("#colors-palette");
    this.controls = document.querySelector("#controls");
    this.colors = ["gray", "red", "yellow", "blue", "white"];
    this.pickedColor = "";
    this.message = this.createElement("p", "paragraph", {});
    this.gridCount = 14;
    this.initialRun = true;
    this.history = [];
    this.startUp();
  }

  startUp() {
    this.message.innerHTML = "Please select a color";
    this.initStyles();
    this.createPixels();
    this.createPalette();
  }

  initStyles() {
    Object.assign(this.boardPixels.style, {
      gridTemplateColumns: `repeat(${this.gridCount},1fr)`,
      gridTemplateRows: `repeat(${this.gridCount},1fr)`,
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
    const defaultDrawing = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "red",
      "red",
      "red",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "red",
      "red",
      "",
      "red",
      "red",
      "red",
      "red",
      "red",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "red",
      "",
      "white",
      "white",
      "red",
      "red",
      "red",
      "red",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "red",
      "red",
      "red",
      "white",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "rgb(0, 0, 0)",
      "",
      "",
      "rgb(0, 0, 0)",
      "red",
      "red",
      "red",
      "red",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "red",
      "red",
      "red",
      "red",
      "rgb(0, 0, 0)",
      "",
      "",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "red",
      "red",
      "rgb(0, 0, 0)",
      "",
      "",
      "rgb(0, 0, 0)",
      "red",
      "red",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "",
      "",
      "rgb(0, 0, 0)",
      "",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "",
      "",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];

    if (this.initialRun) {
      this.initialRun = false;
      for (let i = 0; i < this.gridCount * this.gridCount; i++) {
        const pixel = this.createElement("i", "pixel", {
          width: `100%`,
          height: `100%`,
          background: defaultDrawing[i],
        });
        pixel.id = "pixel-id-" + i;
        this.initStyles();
        this.boardPixels.appendChild(pixel);
      }
      return;
    }

    for (let i = 0; i < this.gridCount * this.gridCount; i++) {
      const pixel = this.createElement("i", "pixel", {
        width: `100%`,
        height: `100%`,
      });
      pixel.id = "pixel-id-" + i;
      this.initStyles();
      this.boardPixels.appendChild(pixel);
    }
  }

  createPalette() {
    for (let i = 0; i < this.colors.length; i++) {
      const color = this.createElement("i", "color", {
        background: this.colors[i],
      });
      this.colorsPalette.appendChild(color);
    }
    const customColor = this.createElement("input", "color", {});
    customColor.type = "color";
    this.colorsPalette.append(customColor, this.message);
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

  fillColor(target) {
    this.history.push({
      id: target.id,
      color: target.style.background,
    });
    target.style.background = this.pickedColor;
  }

  undoFillColor() {
    if (!this.history.length) return;
    const lastElement = this.history.pop();
    [...this.boardPixels.children].forEach((e) => {
      if (e.id === lastElement.id) {
        e.style.background = lastElement.color;
      }
    });
  }

  showHideGrid(checked) {
    [...game.boardPixels.children].forEach(
      (e) => (e.style.border = checked ? "none" : this.boardPixels.style.border)
    );
  }

  startGame() {
    this.startScreen.style.display = "none";
    this.inGameScreen.style.display = "flex";
  }

  clearBoard() {
    [...this.boardPixels.children].forEach((pixel) => {
      pixel.style.background = "none";
    });
  }
  returnToMain() {
    window.location.reload();
  }
}
