namespace DatabaseEntity {
  export class User {
    constructor(public name: string) {}

    getName(): string {
      return this.name;
    }
  }
}
