let score: number | string = 43;
score = "ere";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let Ujjal: User | Admin;

Ujjal = { username: "Ujjal", id: 343 };

function getDBId(id: number | string) {
  console.log(`Db id is: ${id}`);
}

getDBId(2);
getDBId("5");

const data: number[] = [12, 23, 34, 32];
const data1: (string | boolean)[] = [true, false, "e"];
let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window";
