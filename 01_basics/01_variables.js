const accountId=134358
let accountEmail="piyush@123"
var accountPassword="12345"
accountCity="jaipur"

//accountId=23433  //not allowed
accountEmail="hfghdj.com"
accountPassword="234554"
accountCity="hvbf"
console.log(accountId);
let accountState; // value undefined aayega
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountPassword,accountEmail,accountCity,accountState])
//javascript me semicolon lga bhi skte h nhi bhi 