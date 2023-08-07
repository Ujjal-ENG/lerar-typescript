function Even(num: number): boolean {
  return num % 2 === 0;
}

console.log(Even(5));

let nums: Array<number> = [2, 4, 3, 32, 34];
const map2 = nums.map((el) => el * 2);

console.log(map2);

async function FetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}

FetchData();

const isPalindorme = (str: string): any => {
  const strSplit = str.split("").reverse().join();
  console.log(strSplit);
};

isPalindorme("12321");
