class User {
  private readonly city: string;
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }
}

const obj1 = new User("u@u.com", "ujjal");
console.log(obj1);
