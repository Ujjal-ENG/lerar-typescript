"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `Apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const obj1 = new User("u@u.com", "ujjal");
console.log(obj1);
