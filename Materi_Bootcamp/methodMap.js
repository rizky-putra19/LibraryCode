
// //calling a function each item in array
const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})

console.log(sweeterArray)

// // create a function to use
const makeSweeter = sweetItem => sweetItem * 2;

// // we have an array
const sweetArray = [2, 3, 4, 5, 35];

// // call the function we made. more readable
const sweeterArray = sweetArray.map(makeSweeter);

console.log(sweeterArray);


// //Converting string to an array
const name = "Sammy"
const map = Array.prototype.map

const newName = map.call(name, eachLetter => {
    return `${eachLetter}a`
})

console.log(newName)


// //Rendering list in js libraries
import React from "react";
import ReactDOM from "react-dom";

const names = ["whale", "squid", "turtle", "coral", "starfish"];

const NamesList = () => (
  <div>
    <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<NamesList />, rootElement);


// //Reformatting array Objects
const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})

console.log(usersByLikes);


// Tugas 24/08/2021
const daftarMobil = [
  {
   nama: 'Avanza',
   brand: 'Toyota',
   kecepatan: '120km/h'
  },
  {
   nama: 'Xenia',
   brand: 'Daihatsu',
   kecepatan: '140km/h'
  },
  {
   nama: 'Alphard',
   brand: 'Toyota',
   kecepatan: '180km/h'
  }
  ]
  
  function getSummary (a, b, c) {
   return `Mobil ${b} ${a}, kecepatan maximal ${c} `
  }
  
  let newArray = []
  
  daftarMobil.map((data) => {
   newArray = newArray + getSummary(data.nama, data.brand, data.kecepatan)
  })
  
  console.log(newArray);

  let sortKecepatan = []

  daftarMobil.map((data) => {
  sortKecepatan.push(data.kecepatan)
  })
  
  console.log(sortKecepatan)
  
  sortKecepatan.sort((a, b) => {return a - b})
  
  console.log(sortKecepatan);

  
  // Tugas 24/08/2021
  // const a = "rizky"

  // if(typeof a == 'number') {
  //  console.log('Angka Bilangan bulat')
  // } else if (typeof a == 'string'){
  //  console.log('String')
  // } else {
  //  console.log('Boolean')
  // }

  // console.log(a);
