const accountId = 2353627
let accountEmail = "zaidim357@gmail.com"
var accountPassword = "12345"
accountCity = "Bahawalpur"
let accountState;

// accountId = 2  // Not Allowed

accountEmail = "hc@hc.com"
accountPassword = "34764t82924"
accountCity = "RYK"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])