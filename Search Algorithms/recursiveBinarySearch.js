

function recursiveBinarySearch(list, target) {
    const length = list.length;
    let midPoint = Math.floor(list.length / 2); 

    if (length === 0) {
        return false
    } 
   
    if (list[midPoint] === target) {
        return true
    } 
    
    else if (list[midPoint] < target) {
        let subList = list.slice(midPoint);
        return recursiveBinarySearch(subList, target);
    } else {
        let subList2 = list.slice(0, midPoint);
        return recursiveBinarySearch(subList2, target)
    }  
    
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 12;
let result = recursiveBinarySearch(list, target);

if (result != -1) {
    console.log("Target found ?: " + result);
}
else {
    console.log("Target not found");   
}


