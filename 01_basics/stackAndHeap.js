// Stack(Primitive) and Heap(Non-Primitive)

let myName = "Aadarsh"
let anotherName = "Aadi"

console.log(myName);

console.log(anotherName);

let userOne ={
    email: "user@gmail.com",
    link: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aadarsh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);