export default class Board {
  constructor(container, size = 4) {
    this.container = container;
    this.size = size;
    this.cells = [];
  }

  draw() {
    const total = this.size * this.size;
    this.container.classList.add("board");

    for (let i = 0; i < total; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.container.appendChild(cell);
      this.cells.push(cell);
    }
  }

  getRandomCell(except = null) {
    let result;
    do {
      result = this.cells[Math.floor(Math.random() * this.cells.length)];
    } while (result === except);

    return result;
  }
}
