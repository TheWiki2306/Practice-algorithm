class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    is_Empty() {
        return this.head == null;
    }

    size(){
        let current = this.head;
        let count = 0;

        while (current != null) {
            count += 1;
            current = current.next;
        }

        return count;
    }

    add(data){
        let new_node = new Node(data);
        new_node.next = this.head;
        this.head = new_node;
    }

    search(key){
        let current = this.head;

        while (current != null) {
            if (current.data === key) {
                return current.data
            } else {   
                current = current.next
            }
        }
        return null
    }

    repr(){
        let nodes = [];
        let current = this.head;

        while (current != null) {
            if (current === this.head) {
                nodes.push(`Head: ${current.data}`)
            } else if (current.next === null) {
                nodes.push(`Tail: ${current.data}`)
            } else {
                nodes.push(current.data)
            }
            current = current.next;
        }
        return nodes.join(" -> ")
    }

    
}

const list = new LinkedList()

list.add(23);
list.add(12),
list.add(2);
list.add(67);

const search = list.search(2)

console.log("Resulting linked list: " + list.repr());
console.log("Size of the linked list: " + list.size());
console.log("search result: " + JSON.stringify(search));
