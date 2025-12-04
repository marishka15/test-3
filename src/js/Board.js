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
      this.container.append(cell);
      this.cells.push(cell);
    }
  }

  getCellByIndex(index) {
    return this.cells[index];
  }

  getRandomCellIndex() {
    return Math.floor(Math.random() * this.cells.length);
  }
}
