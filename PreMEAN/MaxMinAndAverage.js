function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        if(min>arr[i]){
            min = arr[i];
        }
        if(max<arr[i]){
            max = arr[i];
        }
        sum+=arr[i]
    }
    var avg = sum/arr.length
    return("The minimum is "+min+", the maximum is "+max+", and the average is "+avg+".")
}
console.log(maxMinAvg([1, -2, 9, 4]))
