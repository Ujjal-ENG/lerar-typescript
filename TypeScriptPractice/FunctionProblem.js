"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function Even(num) {
    return num % 2 === 0;
}
console.log(Even(5));
let nums = [2, 4, 3, 32, 34];
const map2 = nums.map((el) => el * 2);
console.log(map2);
function FetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = yield res.json();
        console.log(data);
    });
}
FetchData();
const isPalindorme = (str) => {
    const strSplit = str.split("").reverse().join();
    console.log(strSplit);
};
isPalindorme("12321");
