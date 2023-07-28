class User {
  private _courseCount = 1;
  private readonly city: string;
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  private deleteToken() {
    console.log("Token Deleted");
  }
  get getAppleEmail(): string {
    return `Apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course Count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const obj1 = new User("u@u.com", "ujjal");
console.log(obj1);
