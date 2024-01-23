export default class InitialHTML {
  constructor() {
    this.root = document.querySelector("#root");
    this.startScreenHTML = `
        <h1>Build Your Pixel Art Drawing Board!</h1>
        <p>
          Turn Pixels into Masterpieces with JavaScript Classes and DOM Magic!
        </p>
        <button id="show-board">show board</button>
    `;
    this.mainScreenHTML = `
        <div id="board-pixels"></div>
        <div id="controls-container">
          <div class="grid-size">
            <label for="grid-size-input"> Grid Size: </label>
            <input
              type="number"
              id="grid-size-input"
              placeholder="example: 10, 25, 50, 70, 99..."
            />
            <button id="grid-size-button">submit</button>
          </div>
          <div id="colors-palette">
            <p id="color-message" class="paragraph">please select a color</p>
            <input type="color" class="color" />
          </div>
          <div id="buttons-control">
            <span class="show-hide-grid">
              <label for="show-hide-grid"> Hide Grid </label>
              <input id="show-hide-grid" type="checkbox" />
            </span>
            <button id="undo-fill">Undo</button>
            <button id="redo-fill">Redo</button>
            <button id="reset-board">Clear Board</button>
            <button id="return-main">Homepage</button>
          </div>
        </div>
    `;
    this.createElement("section", "start-screen", this.startScreenHTML);
    this.createElement("section", "main-screen", this.mainScreenHTML);
  }

  createElement(type, id, innerHTML) {
    const startScreen = document.createElement(type);
    startScreen.id = id;
    startScreen.innerHTML = innerHTML;
    this.root.appendChild(startScreen);
  }
}
