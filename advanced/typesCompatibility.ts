// Case 1
/* 
interface Pet {
  name: string;
}

class Dog {
  name: string;
}

let pet: Pet;

pet = new Dog(); 
*/

// Case 2
/* 
interface Pet {
  name: string;
}

let pet: Pet;

const dog = { name: "Firulais", breed: "Pomeranian" };
pet = dog; 
*/

// Case 3
/* 
interface Pet {
  name: string;
}

const dog = { name: "Firulais", breed: "Pomeranian" };

function greet(pet: Pet) {
  console.log(`Hello, ${pet.name}`);
}
greet(dog); 
*/

// Case 4
/* 
enum Status {
  Ready,
  Waiting,
}

enum Color {
  Red,
  Blue,
  Green,
}

let stat = Status.Ready;
stat = Color.Blue;  // Error
*/

// Case 5
/* 
interface Empty<t> {}

let x: Empty<number> = "1";
let y: Empty<string> = 1;
x = y; // OK
*/

// Case 6
/* 
interface NotEmpty<T> {
  name: T;
}

let x: NotEmpty<number> = {
  name: 1,
};
let y: NotEmpty<string> = {
  name: "foo",
};
x = y; // Error 
*/
