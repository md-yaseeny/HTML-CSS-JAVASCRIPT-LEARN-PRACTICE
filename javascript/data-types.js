
// 1.Number- > can store integer and decimal
var marks = 100;
console.log(marks);
console.log(typeof marks);

marks = 1256.365423;
console.log(marks);
console.log(typeof marks);

// maxximum and minimum value of number we can store in js
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// 2.String -> character is also string

var str = "";
console.log(typeof str);

str = "a";
console.log(typeof str);

str = "yaseen"
console.log(typeof str);

// Empty String is a falsy value


// 3.Boolean -> they can store true or false
var isStudent = false;
console.log(typeof isStudent);

isStudent = true;
console.log(typeof isStudent);

// 4. Undefined -> it is only present in js
var container;
console.log(container);
console.log(typeof container);

// 5. Null
var abc = null; // this is explicit assignment of value null in container
console.log(typeof abc); // object -> a bug in js
console.log(abc);


// Null vs undefined -> Null is a value assigned by developer to a variable while undefined
// is a value assigned by default to a variable by js. 

// ES6
// 6. Big Int
var largeInt = 10000000000000000890000n;
console.log(largeInt);
console.log(typeof largeInt);
var n = BigInt('100002345456784545');


// 7. Symbols
var st1 = Symbol("yaseen");
var st2 = Symbol("yaseen");

st1 == st2;
// symbol create unique literals to differentiate between them


/// Non primitive data typed
// 1. Objects -> These are special type of data where you can store data in key value form
/**
 * student
 * name : yaseen
 * marks : 98
 * rollno : 2
 */

var student = {
    name : "yaseen",
    age : 19,
    marks : 98
}
console.log(student);
console.log(typeof student);
console.log(student.name);