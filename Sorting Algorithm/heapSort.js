// To insert in a heap (Max heap)
function heapSortInsertion(heap, value) {
    heap.push(value);
    heapify_up(heap, heap.length - 1);

    return heap;
}

function heapify_up(heap, index) {
    let parent_index = Math.floor((index - 1) / 2 );

    while (index > 0 && heap[parent_index] < heap[index]) {
        let temp;
        temp = heap[parent_index];
        heap[parent_index] = heap[index];
        heap[index] = temp;

        index = parent_index;
        parent_index = Math.floor((index - 1) / 2 );
    }
}

let arrayList = [] 
let result; 
result = heapSortInsertion(arrayList, 45);
result = heapSortInsertion(arrayList, 55);
result = heapSortInsertion(arrayList, 3);
result = heapSortInsertion(arrayList, 65);
console.log(result);
