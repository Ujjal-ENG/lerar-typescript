const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

const res = identityThree(3 + "3");
console.log(res);
function identityFour<T>(val: T): T {
  return val;
}

identityFour(4);

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "bot", type: 34 });
