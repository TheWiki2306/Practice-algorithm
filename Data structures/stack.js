class stack {
  constructor(size) {
    this.top = -1;
    this.size = 5;
    this.stack = new Array(size);
  }

  push() {
    if (this.top === this.size - 1) {
      console.log("Overflow: stack is full");
      return;
    }

    let x = parseInt(prompt("Enter data: "));
    if (isNaN(x)) {
      console.log("Enter a number");
    }
  }
}
