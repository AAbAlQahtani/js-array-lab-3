let students =["Ali", "Sara", "Ahmed", "Lana","Omar", "Noor"]

//1
const startWithA = students.filter(function(name) {
    return name[0].toLowerCase() === "a";
  });
     console.log(startWithA);
  
//2

const filterCount = students.filter(function(name) {
    return name.length > 4;
  }).length;
  console.log(filterCount);
  
//3 

const mapUpperLetter =students.map(function(name) {
    return name.toUpperCase();
  });
     console.log(mapUpperLetter);

//4

const find1 =students.find(function(name) {
    return name.toLowerCase().includes("r");
  });
     console.log(find1);

//5 

const sorted =students.slice().sort();
    console.log(sorted);

//6
const Exists= students.includes("Omar");
console.log(Exists);


//7
const total = students.reduce(function(total, name) {
    return total + name.length;
  }, 0);
  console.log(total);

//8
const even = students.filter(function(name) {
    return name.length % 2 === 0;
  });
     console.log(even);

//9

const reversed = students.map(function(name) {
    return name.split("").reverse().join("");
  });
  console.log(reversed);
  
//10
const withoutO = students.filter(function(name) {
    return !name.toLowerCase().includes("o");
  });
  console.log(withoutO);
  

//11
const studentsGrades = [
     ["Ali", [85, 90, 78]],
     ["Sara", [97, 78, 99]],
    ["Ahmed", [77, 65, 70]],
    ["Lana", [82, 84, 89]],
    ["Omar", [67, 95, 78]],
     ["Noor", [92, 93, 89]]
  ];


