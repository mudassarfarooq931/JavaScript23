
// Variables (var , let , const)
const accountId = 1445533;  // const initialize at declare time and caanot be changed the value
let accountEmail = "mudassar@gmail.com";  // let cannot declare more than one time but can be changed the value
var accountPassword = "12345" // var can be declare and chnaged more than one time
accountCity = "Lahore";
let accountState;

console.log("AccountId : ",accountId);
console.log("AccountEmail : ",accountEmail);
console.log("AccountPassword : ",accountPassword);
console.log("AccountCity : ",accountCity);
console.log("AccountState : ",accountState);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/
// Variables (var , let , const)