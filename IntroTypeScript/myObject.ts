const User = {
  name: "Ujjal",
  email: "kopa@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Ujjal", isPaid: false, email: "h@h.com" };

createUser(newUser);

function createCourses(): { name: string; age: number } {
  return { name: "ujjal", age: 23 };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser2(user: User): User {
  return { name: "", email: "", isActive: true };
}
createUser2({ name: "", email: "", isActive: true });

export {};
