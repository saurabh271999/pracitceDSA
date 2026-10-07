
// function sort(arr){
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length-1-i; j++){

//         if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// return arr;
// }

// console.log(sort([1,22,14,5,57,12,89]))

// const arr = [5,54,112,645,32,11,22,7,3,1,43]

// let min = arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// console.log(min)

// const arr = [1,22,14,5,57,12,89]
// const res = []

// for(let i = arr.length; i>=0; i--){
//     res.push(arr[i])

// }
// console.log(res)
// const arr = [1,22,14,5,57,12,89]

// function second(arr){
//     let max = 0
//     let second = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//        second = max
//             max = arr[i]
//         }else if(arr[i]>second){
//             second = arr[i]
//         }
//     }
//     return second
// }
// console.log(second([1,22,14,5,57,12,89]))


// const arr = [1,22,14,5,57,12,89]
// const newArr = [111,22,33,44,55,66,77,88,99]

// const merge = [...arr, ...newArr]
//     console.log(merge)


// const max = Math.min(...arr)
// console.log(max)

// const res = arr.sort((a, b) => b - a)
// console.log(arr[1])

function palindrome(str){
return str === str.split("").reverse("").join("")
}
console.log(palindrome("apple"))