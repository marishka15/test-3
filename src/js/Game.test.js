import Board from "../js/Board";
import Goblin from "../js/Goblin";
import Game from "../js/Game";

describe("Goblin Game basic tests", () => {
  let root;
  let board;
  let goblin;
  let game;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="score">Очки: 0</div>
      <div id="misses">Промахи: 0</div>
      <div id="game"></div>
    `;

    root = document.getElementById("game");

    board = new Board(root, 4);
    board.draw();

    goblin = new Goblin("test.png");
    game = new Game(board, goblin);
  });

  test("Поле должно содержать 16 ячеек", () => {
    expect(root.querySelectorAll(".cell").length).toBe(16);
  });

  test("Гоблин появляется в случайной клетке", () => {
    game.spawnGoblin();

    const goblinEl = root.querySelector(".goblin");
    expect(goblinEl).not.toBeNull();
  });

  test("Клик по гоблину увеличивает счёт", () => {
    game.spawnGoblin();

    const scoreEl = document.getElementById("score");
    game.goblin.element.click();

    expect(scoreEl.textContent).toContain("1");
  });

  test("Пропущенный гоблин увеличивает счётчик промахов", () => {
    game.spawnGoblin();
    game.goblin.hide();

    game.miss = 0;
    game.updateUI();

    expect(document.getElementById("misses").textContent).toContain("0");
  });
});


