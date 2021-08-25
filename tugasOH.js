// // Tugas Loop Array Code Wars
// function loopArr(arr, direction, steps) 
// let tmpArr = arr.slice(-steps)
// let result = arr.slice(2, arr.lenght)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           arr.slice(0, steps)
// console.log(result)
// };


// const loopArr = (arr, direction, steps) => {
//     return direction === "right" 
//     ? [...arr.slice(-steps), ...arr.splice(0, arr.length-steps)]
//     : [...arr.slice(steps), ...arr.slice(0, steps)];
//   };


// console.log(loopArr([1, 5, 87, 45, 8, 8], "right", 2));
// console.log(loopArr([1, 5, 87, 45, 8, 8], "left", 2));



// const number = [8, 9, 10, 7];

// function sortNumber(a ,b) {
//     return b - a;
// };

// console.log(number.sort(sortNumber))


// 1. Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
// const array1 = ["a", "b", "c"];
// const array2 = [1, 2, 3];

// console.log(array1.concat(array2));


// 2. Write a function that combines two lists by alternatingly taking elements, e.g. ['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3] → [a,1,b,2,c,3].
// function combine(arr1, arr2) {
//   let merge = [];
//   let totalArr = arr1.length + arr2.length

//   for(i=0; i < totalArr; i++){
//       merge.push(arr1[i], arr2[i])
//     }
//     return merge.filter((val) => val)
//   }

// console.log(combine(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3]));

// 3. Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort.
const array1 = [1,4,6];
const array2 = [2,3,5];

console.log(array1.concat(array2).sort());
// 4. Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding 'ay'. "The quick brown fox" becomes "Hetay uickqay rownbay oxfay".