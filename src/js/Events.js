import Screen from "./Screen.js";

export default class Events {
  constructor(screen) {
    this.startButton = document.querySelector("#show-board");
    this.resetButton = document.querySelector("#reset-board");
    this.returnButton = document.querySelector("#return-main");
    this.undoButton = document.querySelector("#undo-fill");
    this.redoButton = document.querySelector("#redo-fill");
    this.gridInput = document.querySelector("#grid-size-input");
    this.gridButton = document.querySelector("#grid-size-button");
    this.gridCheckbox = document.querySelector("#show-hide-grid");
    this.screen = screen;
    this.isMouseDown = false;
    this.currentBox = null;
  }

  renderEvents() {
    this.gridInput.addEventListener("input", (e) => {
      this.screen.board.updateGridSize(Number(e.target.value));
    });
    this.gridButton.addEventListener("click", () => {
      this.screen.board.createBoard();
      this.renderPixelsBoard();
    });
    this.startButton.addEventListener("click", () => {
      this.screen.showBoard();
    });
    this.resetButton.addEventListener("click", () => {
      this.screen.board.clearBoard();
    });
    this.returnButton.addEventListener("click", () => {
      this.screen.returnToMain();
    });
    this.undoButton.addEventListener("click", () => {
      this.screen.board.undoFillColor();
    });
    this.redoButton.addEventListener("click", () => {
      this.screen.board.redoFillColor();
    });
    this.gridCheckbox.addEventListener("input", (event) => {
      this.screen.board.showHideGrid(event.target.checked);
    });
  }

  renderPixelsBoard() {
    [...this.screen.boardPixels.children].forEach((child) => {
      const { board } = this.screen;
      child.addEventListener("mousedown", (event) => {
        event.preventDefault();
        this.isMouseDown = true;
        this.currentBox = event.target;
        if (!board.pickedColor) return;
        if (child.classList.contains("pixel")) {
          board.fillColor(child);
        }
      });
      child.addEventListener("mouseup", () => {
        this.isMouseDown = false;
        this.currentBox = null;
      });
      child.addEventListener("mouseover", () => {
        if (this.isMouseDown && this.currentBox !== null) {
          if (!board.pickedColor) return;
          if (child.classList.contains("pixel")) {
            board.fillColor(child);
          }
        }
      });
    });
  }
  renderColorsPalette() {
    this.screen.colorsPalette.addEventListener("click", ({ target }) => {
      if (target.classList.contains("color")) {
        [...this.screen.colorsPalette.children].forEach((e) =>
          e.classList.remove("active")
        );
        target.classList.add("active");
        if (target.type === "color") {
          target.addEventListener("input", (event) => {
            this.screen.palette.pickColor(event.target.value);
            this.screen.board.pickColor(event.target.value);
          });
          return;
        }
        this.screen.palette.pickColor(target.style.background);
        this.screen.board.pickColor(target.style.background);
      }
    });
  }
}
