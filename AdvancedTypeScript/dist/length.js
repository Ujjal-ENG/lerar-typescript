"use strict";
function getSearchProducts(products) {
    // do some database operation
    const myIdx = 4;
    return products[myIdx];
}
const getMoreSearchProduct = (prodct) => {
    return prodct[3];
};
function anotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
anotherFunction(6, { connection: "db", username: "u", password: "f" });
