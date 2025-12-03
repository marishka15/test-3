export default class Game {
  constructor(board, goblin) {
    this.board = board;
    this.goblin = goblin;

    this.score = 0;
    this.miss = 0;

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

  spawnGoblin() {
    const cell = this.board.getRandomCell(this.goblin.currentCell);

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
    alert(`Игра окончена! Ваш счёт: ${this.score}`);
  }

  updateUI() {
    document.getElementById("score").textContent = `Очки: ${this.score}`;
    document.getElementById("misses").textContent = `Промахи: ${this.miss} / 5`;
  }
}
