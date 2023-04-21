interface PersonInterface {
  name: string;
  age: number;
  sayHello: () => void;
}

class PersonClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello");
  }
}

interface PetInterface {
  makeSound: () => string;
}

class PetClass {
  sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  makeSound() {
    return this.sound;
  }
}

class Dog implements PetInterface {
  makeSound() {
    return "Guaf";
  }
}

class Cat extends PetClass {}

const myCat = new Cat("Miau");

myCat.makeSound();
