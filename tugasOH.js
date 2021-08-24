// // Tugas Loop Array Code Wars
// function loopArr(arr, direction, steps) 
// let tmpArr = arr.slice(-steps)
// let result = arr.slice(2, arr.lenght)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           arr.slice(0, steps)
// console.log(result)
// };


// const loopArr = (arr, direction, steps) => {
//     return direction === "right" 
//     ? [...arr.slice(-steps), ...arr.splice(0, arr.length-steps)]
//     : [...arr.splice(steps), ...arr.slice(0, steps)];
//   };


// console.log(loopArr([1, 5, 87, 45, 8, 8], "right", 2));
// console.log(loopArr([1, 5, 87, 45, 8, 8], "left", 2));



const number = [8, 9, 10, 7];

function sortNumber(a ,b) {
    return b - a;
};

console.log(number.sort(sortNumber))