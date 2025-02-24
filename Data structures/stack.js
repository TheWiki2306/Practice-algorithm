let size = 5;
let stack = new Array(size);
let top = -1;

function push() {
  let x;
  x = parseInt(prompt("Enter data: "));
  if (top === size - 1) {
    console.log("Overflow...");
  } else {
    top++;
    stack[top] = x;
  }

  console.log(stack);
}
