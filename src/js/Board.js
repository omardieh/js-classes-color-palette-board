class Board {
  constructor(
    startScreen,
    inGameScreen,
    boardPixels,
    pickedColor,
    createElement
  ) {
    this.startScreen = startScreen;
    this.inGameScreen = inGameScreen;
    this.boardPixels = boardPixels;
    this.pickedColor = pickedColor;
    this.createElement = createElement;
    this.gridCount = 14;
    this.initialRun = true;
    this.fillHistory = [];
  }

  startUp() {
    this.updateStyles();
    this.createPixels();
  }

  updateStyles() {
    Object.assign(this.boardPixels.style, {
      gridTemplateColumns: `repeat(${this.gridCount},1fr)`,
      gridTemplateRows: `repeat(${this.gridCount},1fr)`,
    });
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
      this.boardPixels.appendChild(pixel);
    }

    this.updateStyles();
  }

  updateGridSize(newCount) {
    if (!newCount) return;
    this.gridCount = newCount;
  }

  fillColor(target) {
    this.fillHistory.push({
      id: target.id,
      color: target.style.background,
    });
    target.style.background = this.pickedColor;
  }

  undoFillColor() {
    if (!this.fillHistory.length) return;
    const lastElement = this.fillHistory.pop();
    [...this.boardPixels.children].forEach((e) => {
      if (e.id === lastElement.id) {
        e.style.background = lastElement.color;
      }
    });
  }

  showHideGrid(checked) {
    [...this.boardPixels.children].forEach(
      (e) => (e.style.border = checked ? "none" : this.boardPixels.style.border)
    );
  }

  clearBoard() {
    [...this.boardPixels.children].forEach((pixel) => {
      pixel.style.background = "none";
    });
  }
}
