const sayHello = (name: string) => {
  console.log(`Hola, ${name}`);
};

function sayGoodbye(name: string) {
  console.log(`Adios, ${name}`);
}

const suma = (a: number, b: number): number => {
  return a + b;
};

interface User {
  id: number;
  name: string;
  description: string;
}

const saveUser = ({ name, ...user }: User): string => {
  // userModel.save({name, ...user})
  console.log("User saved: ", name);
  console.log("User propertys:", { ...user });
  return name;
};

const myUser: User = {
  id: 1,
  name: "Yosef",
  description: "He likes animals",
};

saveUser(myUser);
