
// 1-task
// let arr = [55,3,2,11,3,4,6,7,12]
// console.log(arr.sort((i,j) => i-j));

// 2-task
// let arr = [1,6,9,5,8,18,25]
// function rangeSum(arr, startIndex, endIndex){
//     let evenRes = 0
//     const res = arr.slice(startIndex, endIndex + 1)
//     res.forEach(value => evenRes += value);
//     return evenRes
// }
// console.log(rangeSum(arr, 2 , 5));

// 3-task
// 1-way

// let arr = [2,4,5,6,6,3,2,1]
// let all = []
// const res = arr.filter(value => {
//     if(!all.includes(value)){
//         all.push(value)
//         return all
//     }
// })
// console.log(res);

// 2-way
// function dontRepeatNumber(array){
//     let all = []
//     for(let num of array){
//         if(!all.includes(num)){
//             all.push(num)
//         }
//     }
//     return all
// }
// console.log(dontRepeatNumber(arr));

// 4-task
// 1-way

// let arr = [10, 2, 3, 4, 5, 6, 8, 1022];
// function findMaxMin(array){
//     let min = array[0]
//     let max = array[0]
//     array.filter(value => {
//         if(value < min){
//             min = value
//         }
//         else{
//             max = value
//         }
//     });
//     console.log(`MAX: ${max}`);
//     console.log(`MIN: ${min}`);
// }
// findMaxMin(arr)

// 2-way

// let arr = [1,2,3,4,5,6,8]
// let max = arr[0]
// let min = arr[0]
// arr.filter(value => {    
//     if(value > max){
//         max = value
//     }
//     else{
//         min = value
//     }
// })
// console.log(`MAX: ${max}`);
// console.log(`MIN: ${min}`);

// 6-task
// let arr = [1,2,3,5,6,8]
// const res = arr.map(value => value)
// console.log(res.reverse());

// 7-task
// let arr = [5,4,36,7,8,3,2,9,6,1]
// const res = arr.filter(value => {
//     if(value % 2 != 0){
//         return value
//     }
// })
// console.log(res);

// 8-task
// let arr = [2,3,4,5,7,6]
// const res = arr.filter((value, index, arr) => index % 2 != 0)
// console.log(res);

// 9-task
// let arr = [2,3,4,25,7,15]
// let max = [0]
// function findMax(arr){
//     arr.forEach((value, index, arr) => {
//         if(index % 2 != 0){
//             if(max < value){
//                 max = value
//             }
//         }
//     })
//     console.log(max);
// }
// findMax(arr)

// 11-task
// let arr = [1,2,3,4,5,6,7]
// const res = arr.filter(value => value % 2 != 0)
// console.log(res);

// 12-task
// let arr = [22,5,6,3,2]
// let all = []
// const res = arr.filter(value => {
//     all.unshift(value)
// })
// console.log(all);

// 13-task
// let arr = [2,4,5,5,6,6,3,2,2]
// let all = []
// const res = arr.filter(value => {
//     if(!all.includes(value)){
//         all.push(value)
//         return all
//     }
// })
// console.log(res);

// 14-task
// let arr = [1,55,3,2,11,4]
// let min = arr[0]
// arr.filter((value, index, arr) => {
//     if(index % 2 == 0){
//         if(value < min){
//             min = value
//         }
//     }
// })
// console.log(min);
