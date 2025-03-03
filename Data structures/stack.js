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

    this.top++;
    this.stack[this.top] = x;
    console.log("New stack", this.stack);
  }

  pop() {
    if (this.top === -1) {
      console.log("Underflow: stack is empty");
      return;
    }

    const poppedValue = this.stack[this.top];
    console.log("Popped Value" + poppedValue);
    console.log("New stack" + this.stack);
    return poppedValue;
  }

  peek() {
    if (this.top === -1) {
      console.log("This stack is empty");
      return;
    } else {
      console.log("Top element" + this.stack[this.top]);
      return this.stack[this.top];
    }
  }
}
