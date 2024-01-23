export default class Palette {
  constructor(colorsPalette, pickedColor, selectedColorText, createElement) {
    this.colorsPalette = colorsPalette;
    this.pickedColor = pickedColor;
    this.selectedColorText = selectedColorText;
    this.createElement = createElement;
    this.defaultColors = ["gray", "red", "yellow", "blue", "white"];
  }

  createPalette() {
    for (let i = 0; i < this.defaultColors.length; i++) {
      const color = this.createElement("i", "color", {
        background: this.defaultColors[i],
      });
      this.colorsPalette.appendChild(color);
    }
  }

  pickColor(color) {
    this.pickedColor = color;
    this.selectedColorText.innerHTML = this.pickedColor + " is selected";
  }
}
