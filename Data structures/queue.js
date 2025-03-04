class Queue {
  constructor(size) {
    this.front = -1;
    this.rear = -1;
    this.size = size;
    this.queue = new Array(size);
  }

  enqueue(x) {
    if (this.rear === this.size - 1) {
      console.log("Queue is full");
      return false;
    } else if (this.front === -1 && this.rear === -1) {
      this.front = this.rear = 0;
    } else {
      this.rear++;
    }
    this.queue[this.rear] = x;
    console.log("New queue " + this.queue);
    return true;
  }
}

const queue = new Queue(5);
queue.enqueue(23);
queue.enqueue(45);
queue.enqueue(23);
queue.enqueue(55);
queue.enqueue(78);
queue.enqueue(99);
