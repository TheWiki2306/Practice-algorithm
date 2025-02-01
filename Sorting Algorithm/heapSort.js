function swap(heap, i, j) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
}


function heapify(heap, index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;


    if (left < heap.length && heap[left] > heap[largest]) {
        largest = left;
    } 
    if (right < heap.length && heap[right] > heap[largest]) {
        largest = left;
    }
    if (largest != index) {
        swap(heap, index, largest)
        heapify(heap, largest)
    }

}


function bubble_up(heap, index) {
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

// Add the deleted root to the sorted list
function sortedArray(heapRoot) {
    let sorted = [];
    
    sorted.unshift(heapRoot);
    // return console.log(sorted);
    
}


// To insert in a heap (Max heap)
function heapSortInsertion(heap, value) {
    heap.push(value);
    bubble_up(heap, heap.length - 1);

    return heap;
}


// To delete in a heap sort
function heapSortDeletion(heap) {
    if (heap.length === 0) {
        return null;
    } else if (heap.length === 1){
        return heap;
    }

  
    let heapRoot = heap[0];
    removedRoots.push(heapRoot);
    heap[0] = heap.pop();
    heapify(heap, 0);
    return heapRoot;
}



let arrayList = [] 
let removedRoots = []
let result; 
let newArray;
result = heapSortInsertion(arrayList, 45);
result = heapSortInsertion(arrayList, 55);
result = heapSortInsertion(arrayList, 3);
result = heapSortInsertion(arrayList, 65);
result = heapSortInsertion(arrayList, 98);
result = heapSortInsertion(arrayList, 2);

console.log(result);



