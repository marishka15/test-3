import "./css/styles.css";
import goblinImg from "./img/goblin.png";
import hammerImg from "./img/cursor.png";
import Board from "./js/Board";
import Goblin from "./js/Goblin";
import Game from "./js/Game";
import Cursor from "./js/Cursor";

const root = document.getElementById("game");

const board = new Board(root, 4);
board.draw();

const goblin = new Goblin(goblinImg);

const game = new Game(board, goblin);
game.start();

const cursor = new Cursor(hammerImg);
cursor.enable();
