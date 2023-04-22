interface MyInterface<T> {
  field: T;
}

const newObject: MyInterface<number> = {
  field: 1,
};

class MyClass<T> {
  field: T;

  constructor(field: T) {
    this.field = field;
  }
}

// Functions example
function getData<T>(id: string): Promise<T> | void {
  // implementation goes here
  //const user = await fetch(`example.com/api/users/${id}`);
  //const result = await user.json();
  //return result;
}

interface User {
  name: string;
}

getData<User>("");

// Classes example
interface UserResponse {
  id: number;
  name: string;
}

class HttpResponse<T> {
  data: T;
  status: number;
  code: number;

  constructor(data: T, status: number, code: number) {
    this.data = data;
    this.status = status;
    this.code = code;
  }
}

const fetchUser = (): UserResponse => {
  return {
    id: 1,
    name: "Ale",
  };
};

const myUser = fetchUser();
const res = new HttpResponse(myUser, 200, 1);
console.log(res);

class CRUD<T> {
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  addItem(item: T) {
    this.items.push(item);
  }

  deleteItem(item: T) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  getItems(): T[] {
    return this.items;
  }
}

const users: UserResponse[] = [
  { id: 1, name: "Antonio" },
  { id: 2, name: "Julia" },
];

const usersClass: CRUD<UserResponse> = new CRUD(users);

usersClass.addItem({ id: 5, name: "Albert" });
console.log(usersClass.getItems());
