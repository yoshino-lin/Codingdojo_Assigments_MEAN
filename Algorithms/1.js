function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
        var min_index = i
        for(var a=i+1;a<arr.length;a++){
            if(arr[min_index]>arr[a]){
                min_index = a
            }
        }
        [arr[min_index],arr[i]] = [arr[i],arr[min_index]]
    }
    return arr
}
console.log(selectionSort([ 3, 6, 7, 1, 4, 9 ]));

function bbsort(arr){
    var time=0
    while (true) {
        for(var i=0;i+1<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                time++
            }
        }
        if(time==0){
            return arr
        }else{
            time=0
        }
    }
}
console.log(bbsort([ 3, 6, 7, 1, 4, 9 ]));
