// const User = {
//   name: "Ujjal",
//   email: "kopa@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "Ujjal", isPaid: false, email: "h@h.com" };

// createUser(newUser);

// function createCourses(): { name: string; age: number } {
//   return { name: "ujjal", age: 23 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser2(user: User): User {
//   return { name: "", email: "", isActive: true };
// }
// createUser2({ name: "", email: "", isActive: true });

type User2 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creaditCardDetails?: number;
};

let myUser: User2 = {
  _id: "1234",
  name: "Jio",
  email: "j@j.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "t@t.com";
// myUser._id = "232";

export {};
