import { defaultDrawing } from "../assets/default-drawing.js";
export default class Board {
  constructor(boardPixels, pickedColor, createElement) {
    this.boardPixels = boardPixels;
    this.pickedColor = pickedColor;
    this.createElement = createElement;
    this.gridCount = 14;
    this.initialRun = true;
    this.undoHistory = [];
    this.redoHistory = [];
  }

  updateStyles() {
    Object.assign(this.boardPixels.style, {
      gridTemplateColumns: `repeat(${this.gridCount},1fr)`,
      gridTemplateRows: `repeat(${this.gridCount},1fr)`,
    });
  }

  createBoard() {
    this.boardPixels.innerHTML = "";
    this.updateStyles();
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
  }

  updateGridSize(newCount) {
    if (!newCount) return;
    this.gridCount = newCount;
  }

  fillColor(target) {
    this.undoHistory.push({
      id: target.id,
      color: target.style.background,
    });
    target.style.background = this.pickedColor;
  }

  undoFillColor() {
    if (!this.undoHistory.length) return;
    const lastElement = this.undoHistory.pop();
    [...this.boardPixels.children].forEach((e) => {
      if (e.id === lastElement.id) {
        this.redoHistory.push({
          id: e.id,
          color: e.style.background,
        });
        e.style.background = lastElement.color;
      }
    });
  }

  redoFillColor() {
    if (!this.redoHistory.length) return;
    const lastElement = this.redoHistory.pop();
    [...this.boardPixels.children].forEach((e) => {
      if (e.id === lastElement.id) {
        this.undoHistory.push({
          id: e.id,
          color: e.style.background,
        });
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

  pickColor(color) {
    this.pickedColor = color;
  }
}
