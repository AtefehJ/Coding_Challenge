"use-strict";

/////////////Read JSON //////////////
// let myRequest = new Request("./coordinates.json");
// //console.log(myRequest);

// fetch(myRequest)
//   .then(function (resp) {
//     return resp.json();
//   })
//   .then(function (script) {
//     //console.log(script);
//});
////////////////////////////////////////////////////
//let starter = require("readline-sync");
// let fs = require("fs");
// let data = JSON.parse(fs.readFileSync("coordinates.json"));

////////////////////////////////////////////////////

let coordinates = [
  { id: "a", value: "54,11" },
  { id: "b", value: "32,101" },
  { id: "c", value: "89,64" },
  { id: "d", value: "10,19" },
  { id: "e", value: "78,80" },
  { id: "f", value: "45,81" },
  { id: "g", value: "4,10" },
  { id: "h", value: "19,16" },
  { id: "i", value: "61,9" },
  { id: "j", value: "12,13" },
  { id: "k", value: "8,98" },
  { id: "l", value: "80,13" },
  { id: "m", value: "42,31" },
  { id: "n", value: "14,12" },
  { id: "o", value: "19,76" },
  { id: "p", value: "82,92" },
  { id: "q", value: "37,16" },
  { id: "r", value: "91,9" },
  { id: "s", value: "76,10" },
  { id: "t", value: "42,62" },
  { id: "u", value: "20,14" },
  { id: "v", value: "71,3" },
  { id: "w", value: "114,101" },
  { id: "x", value: "97,56" },
  { id: "y", value: "104,83" },
  { id: "z", value: "117,19" },
  { id: "0", value: "108,33" },
];

let mycoordinates = [];
let mydistance = [];
let mySortedArr = [];

function nearestCoordinate(x, y) {
  for (let i = 0; i < coordinates.length; i++) {
    mycoordinates[i] = coordinates[i].value.split(",");
    mydistance[i] = Math.round(
      Math.pow(
        Math.pow(mycoordinates[i][0] - x, 2) +
          Math.pow(mycoordinates[i][1] - y, 2),
        0.5
      )
    );
    //Adding distance property
    coordinates[i].distance = mydistance[i];
  }
  //Adding distance property
  mySortedArr = coordinates;

  //sorted array
  coordinates.sort((a, b) => a.distance - b.distance);
  console.log(coordinates);
}

// function closertoFurther(a, b) {
//   if (a.value > b.value) return 1;
//   if (b.value > a.value) return -1;
//   return 0;
// }
