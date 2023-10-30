// Stack and Heap Memory Memory

// Primitive data types are number, string, boolean, NULL, bigint , symbol , undefined.
// Non-primitive data types is the object , array , function. 

// Stact (Primitive) give the copy of the data and cannot change the orignal value
// Heap(Non-Primitive) give the refernece of the value from memory and change the orignal value

// Stack and Heap Memory Memory


// Stack 
let myName = "Mudassar Farooq";
let fullName = myName;
fullName = "Mudassar Malik";
console.log("My Name : " , myName);
console.log("Full Name  : " , fullName);


// Heap
let obj = {
    name : "Mudassar",
    age : 24,
    phone : "03117211059"
}

let obj2 = obj;
console.log(obj);
console.log(obj2);
obj2["name"] = "Faisal";
console.log(obj2);
console.log(obj);
