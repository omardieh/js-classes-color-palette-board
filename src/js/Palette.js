class Palette {
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
    this.fillHistory = [];
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

  pickColor(color) {
    this.pickedColor = color;
    this.updateMessage();
  }
}
