import InitialHTML from "./InitialHTML.js";
import Screen from "./Screen.js";
import Events from "./Events.js";

new InitialHTML();

const screen = new Screen();
screen.startUp();

const events = new Events(screen);
events.renderPixelsBoard();
events.renderColorsPalette();
events.renderEvents();
