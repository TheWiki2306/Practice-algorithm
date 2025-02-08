function frequencyCount(arrayList) {
    // const maxElement = Math.max(arrayList);
    // const number_of_elements = arrayList.length;
    // let count = [];
        
    const frequencyMap = new Map();

    for (const item of arrayList) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }

    frequencyMap.forEach((count, item) => {
        document.writeln(`${item} ${count}<br/>`)
    })

}

const arrayList = [5, 2, 9, 7, 5, 8, 9, 5, 2, 3, 3];
let result = frequencyCount(arrayList);
console.log(result);
