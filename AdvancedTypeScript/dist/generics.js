"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
const res = identityThree(3 + "3");
console.log(res);
function identityFour(val) {
    return val;
}
identityFour(4);
identityFour({ brand: "bot", type: 34 });
