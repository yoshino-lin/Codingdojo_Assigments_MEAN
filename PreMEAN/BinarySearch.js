function binarySearch(numList,numToCheck){
    var min_id = 0
    var max_id = numList.length-1
    while (max_id-min_id>0) {
        var middle_point = max_id-min_id/2
        if(numToCheck > numList[middle_point]){
            min_id = middle_point+1
        }else if(numToCheck < numList[middle_point]){
            max_id = middle_point-1
        }else{
            return(middle_point)
        }
    }
    return(-1)
}
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));
