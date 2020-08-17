// NOTE Value (primitive) Types

/**
 * Strings, numbers, bool, null, undefined
 */

let myName = "Mark"
// NOTE String Concatenation
let myFullName = myName + " Ohnsman"

// console.log(myFullName)

// NOTE Interpolation
let myGreeting = `Hello my name is ${myName}, I am ${30 + 1} years old`
// console.log(myGreeting)


// NUMBERS
// % == MODULUS  (RETURNS REMAINDER OF UNEQUAL DIVISION)



// BOOL's / TRUTHY AND FALSY
// TRUTHY = All numbers but 0, strings with characters, {}, []
// FAlSY = 0, empty strings, null, NaN, undefined

// NOTE on definition values provided are called parameters
function greet(nameToGreet) {
  return "hello " + nameToGreet
}


// NOTE on invocation they are called Arguments
let result = greet("Bill");
console.log(result);




function math(a, b) {
  return a - b
}

let b = 7
let a = 10
console.log(math(b, a));

function birthday(person) {
  myVariable = "Hahahahahaha"
  person.age++
}

function birthdayVal(x) {
  x++
  return x
}


let mark = {
  age: 30
}

birthday(mark)


let newAge = birthdayVal(mark.age)




// NOTE OBJECTS
let me = {
  name: "Mark",
  age: 31,
  eyeColor: {
    left: "blue",
    right: "green"
  }
}

let jake = {
  name: "Jake",
  age: "36",
  eyeColor: {
    left: "green",
    right: "green"
  }
}

// NOTE 'dot notation'
console.log(me.name);

function varGreet(user, prop) {
  // NOTE bracket notation must be used when accessing a property through a variable
  console.log(`Hello ${user.name} I notice your ${prop} is ${user[prop]}`);
}


console.log(jake.eyeColor.right);