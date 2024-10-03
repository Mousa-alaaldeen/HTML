let  age = 27 ;
if(age>18){
console.log('You are an adult');

}
else{
    console.log("You are not an adult");
    
}
let score = 45; 

if (score <= 50) {
    console.log("You failed the test"); 
} else {
    console.log("You passed the test"); 
}

let namee = "John"; 

if (namee === "John") {
    console.log("Hello, John");
} else {
    console.log("You are not John"); 
}
let day = "Monday"; 

if (day !== "Saturday" && day !== "Sunday") {
    console.log("It's a weekday"); 
} else {
    console.log("It's the weekend"); 
}
let num = 4;

if (num % 2 === 0) {
    console.log("The number is even"); 
} else {
    console.log("The number is odd");
}
let char = 'A'; 

if (/^[A-Za-z]$/.test(char)) {
    console.log("It's a letter"); 
} else {
    console.log("It's not a letter"); 
}

let list = [1, 2, 3]; 

if (Array.isArray(list)) {
    console.log("It's an array");
} else {
    console.log("It's not an array"); 
}

let x = 5; 

if (x > 0) {
    console.log("x is a positive number"); 
} else {
    console.log("x is not a positive number"); 

}
let y = -5;

if (y < 0) {
    console.log("y is a negative number"); 
} else {
    console.log("y is not a negative number"); 
}
let z = 9;

if (z % 3 === 0) {
    console.log("z is a multiple of 3"); 
} else {
    console.log("z is not a multiple of 3"); 
}
let gpa = 3.5; 

if (gpa >= 3.0) {
    console.log("Congratulations, you have a good GPA!"); 
} else {
    console.log("Keep trying to improve your GPA!"); 
}
let password = "SecurePass"; 

if (password.length >= 8) {
    console.log("Your password is strong"); 
} else {
    console.log("Your password is weak, it should be at least 8 characters long."); 

}
let age2 = 30;

if (age2 >= 18 && age2 <= 65) {
    console.log("You are of working age"); 
} else {
    console.log("You are not of working age"); 
}
let color = "green"; 

if (color === "red" || color === "green" || color === "blue") {
    console.log("color is a primary color"); 
} else {
    console.log("color is not a primary color"); 
}


function isNumber(value) {
    return  value === 'number' ;
}

isValidNumber(11)
isValidNumber("19") 
isValidNumber("xyz") 
isValidNumber("17.5") 
isValidNumber("21F")
