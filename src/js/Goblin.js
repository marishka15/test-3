export default class Goblin {
  constructor(imgSrc) {
    this.element = document.createElement("img");
    this.element.classList.add("goblin");
    this.element.src = imgSrc;

    this.currentCell = null;
  }

  show(cell) {
    this.hide();
    cell.append(this.element);
    this.currentCell = cell;
  }

  hide() {
    this.element.remove();
    this.currentCell = null;
  }
}
