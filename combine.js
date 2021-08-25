function combine(arr1, arr2) {
  let merge = [];
  const totalArr = arr1.length + arr2.length

  for(let i=0; i < totalArr; i++){
      merge.push(arr1[i], arr2[i])
    }
    return merge.filter((val) => val)
  };

console.log(combine(['a', 'b', 'c'], [1, 2, 3]));



// function combineList(arr1,arr2){
//   let newArr = [];
//   const totalArr = arr1.length + arr2.length;

//   for(let i = 0 ; i < totalArr;i++){
//     newArr.push(arr1[i],arr2[i]);
//   }
    
//   return newArr.filter((val) => val);
// }


// console.log(combineList(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3]))
// console.log(combineList(['g','h','j'], [4,7,9]));
// console.log(combineList(['t','u','v','w'], [1,2,3,4,5,6,7]));