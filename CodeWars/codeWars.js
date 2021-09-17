// Soal Code Wars Sort
const sortme = (names) => {
    return names.sort()
  }
  
  

// Soal Code Wars Sort and Star
  function twoSort(param) {
    return param
    .sort()[0]
    .split("")
    .join("***")
}


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



// Soal Code Wars Jenny Secret Message
function greet(name){
  if(name == "Johnny")
    {return "Hello, my love!"}
  else {return "Hello, " + name + "!"}
  };



// Soal code wars ensure question
function ensureQuestion(s) {
  // Code here`
  return /\?$/.test(s) ? s : s+'?'
};


// Soal code wars Pairs of Integers from m to n
function generatePairs(m, n) {
  let result = [];
  for (let i = m; i <= n; i++)
    for (let j = i; j <= n; j++)
      result.push([i, j]);
  return result;
}

// Soal code wars Previous multiple of three
const prevMultOfThree = n => {
  while(n % 3 != 0) {
    n = Math.floor(n/10);
    if (n < 1) return null;
  }
  return n;
}

// Soal codewars Pandemia
function infected(s) {
  const continents = s.split("X").filter(Boolean)
  const totalWorldPopulation = continents.join('').length

  const infectionSpreaded = continents.map((continent) =>
    continent.includes('1') ? continent.replace(/0/g, '1') : continent,
  )
  const totalPopulationInfected = infectionSpreaded
    .join('')
    .split('')
    .reduce((total, number) => total + Number(number), 0)

  return totalWorldPopulation ? (100 * totalPopulationInfected) / totalWorldPopulation : 0
}

// Soal Placement Test PT Terampil
function cariPrimeNumber(num)
{
    var nilai  = [], i, j,
    primes = [];
    for (i = 2; i <= num; ++i) {
        if (!nilai [i]) {
            primes.push(i);
            for (j = i << 1; j <= num; j += i){
                nilai[j] = true;
            }
        }
    }
    return primes.length;
}

// Soal codewars Palindrome
function isPalindrome(x) {
  let word = x.toLowerCase().split("")

  return word.reverse().join(" ") === x.toLowerCase() ? true : false
}

// Soal codewars 6kyu Vasya have Ticket
function Clerk(name) {
  this.name = name;
  
  this.money = {
    25 : 0,
    50 : 0,
    100: 0 
  };
  
  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine){
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}

// Soal codewars High and Lowest
function highAndLow(numbers){
  let sortNum = numbers.split(" ").sort((a, b) => a - b)
  console.log(sortNum)
  return `${sortNum[sortNum.length - 1]} ${sortNum[0]}` 
};

// Soal codewars count positive dan sum of negative num
function countPositivesSumNegatives(input) {
  if (!input || input.length == 0)
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

console.log(countPositivesSumNegatives([1,2,3,4,5,-1,-2,-3,-4,-5]));

// Soal codewars Integers Difference
const intDiff = (arr, n) => {
  let count = 0;
  for (let i=0;i<arr.length;i++){
    for (let j=i+1;j<arr.length;j++){
    if ((Math.abs(arr[j]-arr[i]))===n){count++}
    }
  }
  return count;
}

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4));

// Soal codewars find unique numbers
function findUnique(numbers) {
  return numbers.reduce((a, b) => a ^ b)
};

console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]));

// Soal codewars All Star Code Challenge
function strCount(str, letter){  
  let splitStr = str.split("");
  let sameWord = [];

  for(let i = 0; i < splitStr.length; i++) {
      if(splitStr[i] == letter) {
          sameWord.push(splitStr[i]);
      };
  };
  return sameWord.length
};

console.log(strCount('Hello', 'l'));

// Soal Codewars xMas Tree
function xMasTree(n){
  let arr = [];
  for (let i=1,j=1;i<=n;i++,j+=2)
  {
    arr.push(`_`.repeat(n-i)+`#`.repeat(j)+`_`.repeat(n-i))
  }
  arr.push(`_`.repeat(n-1)+`#`.repeat(1)+`_`.repeat(n-1))
  arr.push(`_`.repeat(n-1)+`#`.repeat(1)+`_`.repeat(n-1))
  return arr
}

console.log(xMasTree(5));

// Soal codewars oposite attract
function lovefunc(flower1, flower2){
  if(flower1 % 2 == 0 && flower2 % 2 == 0) {
      return false
  } else if(flower1 % 2 !== 0 && flower2 % 2 !== 0) {
      return false
  } else {
      return true
  };
};

console.log(lovefunc(4, 4));