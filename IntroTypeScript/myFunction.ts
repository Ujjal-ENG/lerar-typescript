function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

addTwo(4);
getUpper("eo");
// default value
let loginUser = (name: string, email: string, isPaid: boolean = true) => {
  return { name, email, isPaid };
};

loginUser("ujjal", "kopa");

function getValue(myVal: number): any {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
