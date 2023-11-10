const accId = 16536
let accEmail = "Aadarsh@gmail.com"
var accDet = "112233"
accCity = "Gurgaon"


// accId = 2 // Not allowed
accEmail = "aadarsh@gmail.com"
accDet = "1234"
accCity = "Chapra"

console.log(accEmail)

/* Prefer not to use var
because of issue in block scope and functional scope */

console.table([accDet, accEmail, accCity, accId])