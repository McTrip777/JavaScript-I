// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

myFunction = (() =>{
  return "Zech is my BEST FRIEND";
});
console.log(myFunction());

///////////////////////////////////////////////////

anotherFunction = ((param) => {
  return param;
});
console.log(anotherFunction("in the whole world!"))

///////////////////////////////////////////////////

add =  ((param1, param2) => {
  return param1 + param2;
});
console.log(add(1,2));

///////////////////////////////////////////////////

subtract = ((param1, param2) => {
  return param1 - param2;
});
console.log(subtract(3,2));

///////////////////////////////////////////////////

exampleArray = [1,2,3,4];
const triple = exampleArray.map((num) => {
  return num * 3;
});
console.log(triple);