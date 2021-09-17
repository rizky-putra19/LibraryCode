// Bubble sort Implementation using Javascript

// Creating the bblSort function
function bblSort(arr) {
    for (var i = 0; i < arr.length; i++) {
      // Last i elements are already in place
      for (var j = 0; j < arr.length - i - 1; j++) {
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (arr[j] > arr[j + 1]) {
          // If the condition is true then swap them
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    // Print the sorted array
    console.log(arr);
  }
  
  // This is our unsorted array
  var arr = [1, 4, 2, 5, -2, 3];
  
  // Now pass this array to the bblSort() function
  bblSort(arr);


//   Merge Sort
  function merge(value1, value2) {
    let result = [];
  
    while (value1.length > 0 && value2.length > 0) {
      if (value1[0] < value2[0]) {
        result.push(value1.shift());
      } else {
        result.push(value2.shift());
      }
    }
  
    result = result.concat(value1);
    result = result.concat(value2);
    return result;
  }
  
  let A = [1, 3, 5];
  let B = [2, 7, 9];
  
  console.log(A);
  
  

  function merge2(value1, value2) {
    let result = [];
  
    result = value1.concat(value2);
  
    console.log(result);
  
    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < result.length - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          var temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
  
    return result;
  }
  
  let A = [3, 1, 5];
  let B = [2, 7, 9];
  
  console.log(merge2(A, B));
  


//   Quicksort
function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
    console.log(left)
    // console.log(right)
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  var items = [5, 3, 7, 6, 2, 9];
  console.log(quicksort(items));