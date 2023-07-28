class User {
  email: string;
  name: string;
  readonly city: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const obj1 = new User("u@u.com", "ujjal");
console.log(obj1);
