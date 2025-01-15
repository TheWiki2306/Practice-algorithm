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

    insert(index, data){


        if (index === 0) {
            this.add(data);
            return;

        } else {
            // checks if the index is within the scope of the list
            if (index > this.size()) {
                console.log("this is beyond the list's scope");
                return; 
            } 

            // This is to traverse the list, starting from the head node
            let current = this.head;
            let previous = null;
            let i = 0;

            // This is to traverse the list, until we hit the index
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
                
            }

            // Create a new node
            const new_node = new Node(data);

            // point the new node to the node that was previous at the index
            new_node.next = current;

            // point the node before the new node to the new node
            previous.next = new_node;
        }
    }

    remove(index){
        if (index === 0) {
            // if at head, set the head to the next node
            this.head = this.head.next;
            return;
        } else {

        if (index >= this.size()) {
            console.log("This index isn't within this list's scope");
            return;
        }

        let current = this.head;
        let previous = null;
        let i = 0;

        while (i < index) {
            previous = current;
            current = current.next;
            i++; 
        }

        // this will set the next node of the previous node to the next node of the current node that is being removed 
        previous.next = current.next;
        }
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


// Test

const list = new LinkedList()

list.add(23);
list.add(12),
list.add(2);
list.add(67);
list.insert(4, 19);
list.remove(4)

const search = list.search(2)

console.log("Resulting linked list: " + list.repr());
console.log("Size of the linked list: " + list.size());
console.log("search result: " + JSON.stringify(search));


