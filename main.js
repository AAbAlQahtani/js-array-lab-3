const characters = [
    { name: "Luke Skywalker", height: 177, gender: "male", mass: 77, eyeColor: "brown" },
    { name: "Leia Organa", height: 160, gender: "female", mass: 56, eyeColor: "blue" },
    { name: "Han Solo", height: 180, gender: "male", mass: 80, eyeColor: "brown" },
    { name: "Chewie", height: 222, gender: "male", mass: 190, eyeColor: "black" },
    { name: "kevien", height: 106, gender: "male", mass: 32.2, eyeColor: "red" }
];
// 2
const map1 = characters.map(function(character) {
    return character.name;
  });
  console.log(map1)


const map2 = characters.map(function(character) {
    return character.height;
  });
  console.log(map2)
// 3 

  const reduce1 = characters.reduce(function(total, item) {
    return total + item.height;
  }, 0);
  console.log(reduce1); // 845
  
  
  // 4
const filter1 = characters.filter(function(character) {
    return character.height<200;
})
console.log(filter1)

const filter2 = characters.filter(function(character) {
    return character.gender=== "male"
})
console.log(filter2)

//5 
const sort1 = characters.slice().sort(function(a, b) {
    return a.mass - b.mass;
  });
  console.log(sort1);

  const sort2 = characters.slice().sort(function(a, b) {
    return a.height - b.height;
  });
  console.log(sort2);  
  

//7
const every1 = characters.every(function(character) {
    return character.mass >40;
  });
  console.log(every1);

  const every2 = characters.every(function(character) {
 return character.height <200;
  });
  console.log(every2);

  // 8

  const some1= characters.some(function(character){
return character.eyeColor === "blue"
  })
  console.log(some1)

  const some2= characters.some(function(character){
    return character.height > 210;
      });
      console.log(some2)
  
console.log("end of lab2");


