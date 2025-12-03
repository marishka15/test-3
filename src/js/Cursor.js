export default class Cursor {
  constructor(imgSrc) {
    this.imgSrc = imgSrc;

    this.cursorEl = document.createElement("img");
    this.cursorEl.src = imgSrc;
    this.cursorEl.className = "hammer-cursor";
  }

  enable() {
    document.body.style.cursor = "none";
    document.body.append(this.cursorEl);

    document.addEventListener("mousemove", (event) => {
      this.cursorEl.style.left = event.pageX + "px";
      this.cursorEl.style.top = event.pageY + "px";
    });

    document.addEventListener("mousedown", () => {
      this.cursorEl.classList.add("hit");
    });

    document.addEventListener("mouseup", () => {
      this.cursorEl.classList.remove("hit");
    });
  }
}
