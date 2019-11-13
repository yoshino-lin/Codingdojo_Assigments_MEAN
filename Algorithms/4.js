function InsertSort(arr1,arr2){
    for(var i=0;i<arr1.length;i++){
        for(var a=0;a<arr2.length;a++){
            if (arr2[a]>arr1[arr1.length-1]){
                arr1.push(arr2[a])
                arr2[a] = undefined
            }
            if(arr1[i]>arr2[a]){
                [arr1[i],arr2[a]]=[arr2[a],arr1[i]]
            }
        }
    }
    return arr1
}
console.log(InsertSort([5,10,50,70,90,100,190],[20,40,60,80,85,95,105]));
