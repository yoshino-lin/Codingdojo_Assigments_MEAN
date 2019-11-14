function quickSort(arr,p=arr.length/2,s=0,e=arr.length-1){
    console.log("old: "+arr)
    if(arr.length%2 == 0){
        p++
    }else{
        p+=0.5
    }
    console.log("p: "+p)
    for(var i=0;i<p;i++){
        for(var a=p-1;a<arr.length;a++){
            if(arr[i]>arr[a]){
                [arr[i],arr[a]] = [arr[a],arr[i]]
            }
        }
    }
    console.log("new: "+arr)
    if(arr.length>2){
        arr = quickSort(arr.slice(s,p-1))
    }else{
        return arr
    }
    return arr
}

console.log(quickSort([8,3,1,2,5,4,7,6]))
