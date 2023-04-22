interface Person {
  name: string;
  age: number;
}

type Getter<T> = {
  [Property in keyof T as `get${Capitalize<
    string & Property
  >}`]: () => T[Property];
};

type GetPerson = Getter<Person>;
