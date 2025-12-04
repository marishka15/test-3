export default class Game {
  constructor(board, goblin) {
    this.board = board;
    this.goblin = goblin;

    this.score = 0;
    this.miss = 0;
    this.lastGoblinIndex = -1; 

    this.interval = null;
    this.wasHit = false;
  }

  start() {
    this.spawnGoblin();

    this.interval = setInterval(() => {
      if (!this.wasHit) {
        this.miss += 1;
        this.updateUI();
      }

      if (this.miss >= 5) {
        this.finish();
        return;
      }

      this.spawnGoblin();
    }, 1000);
  }

  getRandomGoblinIndex() {
    const totalCells = this.board.cells.length;
    let newIndex;

    do {
      newIndex = Math.floor(Math.random() * totalCells);
    } while (newIndex === this.lastGoblinIndex && totalCells > 1);

    this.lastGoblinIndex = newIndex;
    return newIndex;
  }

  spawnGoblin() {
    const index = this.getRandomGoblinIndex();
    const cell = this.board.getCellByIndex(index);

    this.wasHit = false;
    this.goblin.show(cell);

    this.goblin.element.onclick = () => {
      this.score += 1;
      this.updateUI();
      this.wasHit = true;
      this.goblin.hide();
    };
  }

  finish() {
    clearInterval(this.interval);
    this.goblin.hide();

    const message = document.createElement("div");
    message.id = "game-end-message";
    message.textContent = `Игра окончена! Ваш счёт: ${this.score}`;
    document.getElementById("app").append(message);
  }

  updateUI() {
    document.getElementById("score").textContent = `Очки: ${this.score}`;
    document.getElementById("misses").textContent = `Промахи: ${this.miss} / 5`;
  }
}
