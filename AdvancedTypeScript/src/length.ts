function getSearchProducts<T>(products: T[]): T {
  // do some database operation
  const myIdx = 4;
  return products[myIdx];
}

const getMoreSearchProduct = <T>(prodct: T[]) => {
  return prodct[3];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T extends number, U extends Database>(
  valOne: T,
  valTwo: U
): object {
  return { valOne, valTwo };
}

anotherFunction(6, { connection: "db", username: "u", password: "f" });
