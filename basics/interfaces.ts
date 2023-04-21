interface Person {
  name: string;
  description: string;
  code?: number;
  sayHello: () => string;
}

let person: Person = {
  name: "John",
  description: "Development",
  code: 12,
  sayHello: () => "Hola",
};

person.code = 10;

let secondPerson: Person = {
  name: "",
  description: "",
  sayHello: () => "Hola 2",
};

secondPerson.code?.toFixed();
