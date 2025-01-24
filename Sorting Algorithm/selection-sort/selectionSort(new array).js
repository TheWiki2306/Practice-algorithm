// incomplete for now



class SelectionSort {
    constructor(array) {
        this.array = array;
    }

    selection(array) {
        let sortedArray = [];

        for (let i = 0; i < array.length - 1; i++) {
            let minIndex = i;
            
            for (let j = i+1; j < array.length; j++) {
                if (array[j] < array[i]) {
                    minIndex = j;
                }
            }
           
        }
    }
}

