// String in JavaScript
myName1 = "Mudassar Farooq";  // double quotes
myName2 = 'Mudassar Farooq'; // single quotes
myName3 = `Mudassar Farooq`; // template literals backticks

console.log("My Name : ", myName1);
console.log("My Name : ", myName2);
console.log("My Name : ", myName3);


// string concatenation using + , and ``
let firstName = "Ayesha";
let lastName = "Malik";

console.log(firstName + " " + lastName);
console.log(firstName  , lastName);
console.log(`${firstName} ${lastName}`) // this is modren way to concat string


// string methods

// 1 length
let text = "This is a text";
console.log(text);
console.log("Length of the text is : ", text.length);

// 2 toUpperCase(). convert string into upper case
console.log("UpperCase : ", text.toUpperCase());

// 3 toLowerCase() convert string into lower case
console.log("LowerCase : ", text.toLowerCase());


// concat() method is used to concat the string
let text1 = "Text1";
console.log(text1);
let text2 = "Text2";
console.log(text2);

console.log(text1.concat(text2));

// charAt() find the position of character at index
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));
console.log(text.charAt(3));

// indexOf() is used to find the index of character
console.log(text.indexOf('T'));
console.log(text.indexOf('h'));
console.log(text.indexOf('i'));
console.log(text.indexOf('s'));

//subString(intitalValue, endingValue)  igone  negative value and not include last value
console.log(text.substring(0,5));


// slice(intialValue,endingValue)   negative value use  and not include last value
console.log(text.slice(0,12));

// trim() method is used to remove extra spaces
let newText = "     This is a new text      ";
console.log(newText , " Length :  " ,newText.length );

console.log(newText.trim());

// trimStart() remove extra spaces from the start of the string
// trimEnd() remove extra spaces from the end of the string
let myText = "  This is a My Text       ";
console.log(myText , " " , myText.length);
console.log(myText.trimStart());
console.log(myText.trimEnd());

// replace() method is used to replace string from a string
let orignalText = " This is a orignal text";
console.log(orignalText);
console.log(orignalText.replace("orignal","fake"));


// includes() method is used to find the specific value in a string and return true or false
console.log(orignalText.includes("text"));
console.log(orignalText.includes("message"));

// A string can be converted to an array with the split() method:


let names = "Mudassar , Adnan, Atif, Zain";
console.log(names);
console.log(names.split());



// string methods

// String in JavaScript