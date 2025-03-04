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

  dequeue() {
    if (this.front === -1 && this.rear === -1) {
      console.log("Queue is empty");
      return false;
    } else if (this.front === this.rear) {
      this.queue[this.front] = undefined;
      this.front = this.rear = -1;
    } else {
      this.queue[this.front] = undefined;
      this.front++;
      console.log("New queue after dequeue: " + this.queue);
    }
  }
}

const queue = new Queue(5);
queue.enqueue(23);
queue.enqueue(45);
queue.enqueue(23);
queue.enqueue(55);
queue.enqueue(78);
queue.enqueue(99);
queue.dequeue();
queue.dequeue();
queue.dequeue();
