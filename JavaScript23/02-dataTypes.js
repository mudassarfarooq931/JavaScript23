// JavaScript Datatypes
/*
1 string
2 number (int,float)
3 bigInt 
4 boolean
5 null
6 undefined
7 symbol ==> used for uniqueness ... mostly used in react to identify the component uniqueness
8 array
9 object 
*/

// typeof is used to find the type of the variable

// string dataType
let fullName = "Mudassar Farooq"; 
console.log("Full Name : " , fullName , " " , typeof fullName);

// number DataType
let age = 24 ; 
console.log("Age : " , 24, " " , typeof age );

//bigInt DataType
bigIntNumber = BigInt("84874598374594375983475894375" );
console.log("BigInt Number" , bigIntNumber, " " , typeof bigIntNumber);

// boolean dataType
let isLoggedIn = true 
console.log("Is LoggedIn : ", isLoggedIn, " " , typeof isLoggedIn);

// null DataType
let empty = null
console.log("Empty : ", empty , " " , typeof empty);

// undefined DataType
let unDefinedVariable;
console.log("Undefined Variable" , unDefinedVariable, " ", typeof unDefinedVariable);

// symbol DataType
let mySymbol = Symbol("This is a Symbol");
console.log("Symbol ", mySymbol);

// array DataType
let numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log(numberArray , " " , typeof numberArray);

let namesArray = ["Mudassar Malik","Faisal Raza","Qasim Ali","Saher Malik"];
console.log(namesArray , " ", typeof namesArray);

// JavaScript Datatypes