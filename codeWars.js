// Soal Code Wars Sort
const sortme = (names) => {
    return names.sort()
  }
  
  console.log(sortme(['one', 'two', 'three' ]));

// Soal Code Wars Sort and Star
  function twoSort(param) {
    return param
    .sort()[0]
    .split("")
    .join("***")
}
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));

// Soal Code Wars Find Multiple Number
function multipleNum (integer, limit){
  const result = []
  for(i=1; i <= limit; i+=1){
    if(integer * i <= limit){
      result.push(integer * i)
    }
  }
  return result
};

console.log(multipleNum(5, 25));

// Soal Code Wars Find The Smallest Number
function findSmallestInt(args) {
  for (var i = 0; i < args.length; i++) {
        for (var j = 0; j < args.length - i - 1; j++) {
          if (args[j] > args[j + 1]) {
            var temp = args[j];
            args[j] = args[j + 1];
            args[j + 1] = temp;
        }
    }
  }
return args[0];
} 

console.log(findSmallestInt([56, 78, 232, 12, 8]));

// Soal Code Wars Jenny Secret Message
function greet(name){
  if(name == "Johnny")
    {return "Hello, my love!"}
  else {return "Hello, " + name + "!"}
  };

console.log(greet("Jim"));

// Soal code wars ensure question
function ensureQuestion(s) {
  // Code here`
  return /\?$/.test(s) ? s : s+'?'
};

console.log(ensureQuestion("No?"))