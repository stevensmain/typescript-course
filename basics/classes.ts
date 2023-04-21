class Animal {
  name: string;
  private _id: number;
  protected status: "active" | "inactive";

  constructor(name: string) {
    this.name = name;
    this._id = Math.random() * 100;
  }

  getId(): number {
    return this._id;
  }

  makeSound(): void {
    console.log("Grrr");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
    this.status = "active";
  }

  makeSound(): void {
    console.log("Guauf");
  }
}

const myDog = new Dog("Alex", "Pastor");
myDog.makeSound();
// myDog.status Not can be accessed
