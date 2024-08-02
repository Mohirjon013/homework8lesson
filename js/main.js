// Homework

// 1-task
// let arr = [55,3,2,11,3,4,6,7,12]
// console.log(arr.sort((i,j) => i-j));


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
// let arr = [1, 2, 3, 4, 5, 6, 8, 8, 1];

// let max = arr[0];
// let min = arr[0];

// arr.forEach(value => {
//     if (value > max) {
//         max = value;
//     }
//     if (value < min) {
//         min = value;
//     }
// });

// console.log("Max: ", max); 
// console.log("Min: ", min); 

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
// const res = arr.filter((value, index, arr) => {
//     if(index % 2 != 0){
//         return value
//     }
// })
// console.log(res);

// 9-task
// let arr = [2,3,4,5,7,15]
// let max = arr[arr.length -1]
// arr.forEach((value, index, arr) => {
//     max = value
    
// })
// console.log(max);

// 11-task
// let arr = [45,2,3,5,4,8,7,9]
// const res = arr.filter(value => {
//     if(value % 2 != 0){
//         return value
//     }
// })
// console.log(res);

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
// let max = arr[0]
// arr.forEach((value, index, arr) => {
//     if(index % 2 == 0){
//         if(value > max){
//             max = value
//         }
//     }
// })
// console.log(max);