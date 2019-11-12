function InsertSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var a=i+1;a<arr.length;a++){
            if(arr[i]>arr[a]){
                [arr[i],arr[a]]=[arr[a],arr[i]]
            }
        }
    }
    return arr
}
console.log(InsertSort([180,20,50,60,10,90,80,5,0,70,160,13,7,9]));
