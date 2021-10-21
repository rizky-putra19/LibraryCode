function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
    return [];
  
    var positiveNum = []
    var negativeNum = []
    var totalNeg = 0
    
    
    for(var i=0; i<input.length; i++){
      if(input[i] > 0){
        positiveNum.push(input[i])
      } else {
        negativeNum.push(input[i])
      }
    }
  
  
  for (var i = 0; i < negativeNum.length; i++) {
    totalNeg += negativeNum[i] }
  
  return [positiveNum.length, totalNeg]
  }
  
console.log(countPositivesSumNegatives([]));