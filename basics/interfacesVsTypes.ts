type Person = {
  name: string;
  age: number;
};

interface Employee extends Person {
  charge: string;
}

const newEmployee: Employee = {
  name: "Alejandra",
  age: 36,
  charge: "Enginner",
};

// Union types

type User = {
  id: string;
};

type Admin = User & Person;

const myAdmin: Admin = {
  name: newEmployee.name,
  age: newEmployee.age,
  id: "12KL897SA",
};

type UserTypes = "admin" | "normal" | 0;

const myUser: UserTypes = "admin";

interface Developer {
  name: string;
  stack: string[];
}

interface Developer {
  phone: string;
}

const me: Developer = {
  name: "Antonio",
  stack: ["Javascript"],
  phone: "322 222 1900",
};
