import { User, generateId } from "./utils.module";

const myUser: User = {
  id: generateId(),
  name: "Alejandro",
};

const sayHello = (name: string) => {
  console.log(`Hola, ${name}`);
};

sayHello(myUser.name);
