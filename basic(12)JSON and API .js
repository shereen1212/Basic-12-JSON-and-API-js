// JSON and API //

//1//

const person = {
  name: "Sherin",
  age: 30,
  email: "Sherin.doe@example.com",
};
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

//2//
function countProperties(jsonObject) {
  return Object.keys(jsonObject).length;
}
const personn = {
  name: "Shereen",
  age: 20,
  email: "shereen.doe@example.com",
};

console.log("Number of properties:", countProperties(personn));

//3//

//4//

//5//
//6//
//7//
//8//
