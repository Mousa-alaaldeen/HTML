
// -----Example1-------
function findSmallest(arr){
    let  x=arr[0];
for(i=0;i<arr.length;i++){
      if(arr[i]<x)
    {
        x=arr[i];
        // console.log(x);
    }
    return x;

}

}
console.log(findSmallest([30, 45, 60, 7,1,89])); 

// =======Example:2
function  AlphabeticalOrder(str){
    let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr.length-1; j++) {
    if (arr[j]>arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        
    }
    
   }
    
    
  }
  return arr.join('');
}
console.log(AlphabeticalOrder('hello')); 

// =======Example:3
function factorial(x){
    let f=1;
for (let index = 1; index <= x; index++) {
    f=f* index;
    
}
return f;
}
console.log(factorial(8));
// =======Example:4
function oddOrEven(x){
    if(x%2==0){
       return  "Even";
        
    }
    else{
        return "Odd";
        
    }
}
console.log(oddOrEven(9));
// =======Example:5
function evenNum(array) {
    let x=[];
    for (let index = 0; index < array.length; index++) {
        if(array[index]%2==0){
          
            
            x.push(array[index]);

        }
       
    }
    return x;
   
}
console.log(evenNum([5,6,8,9]));
// =======Example:6
function numbersOnly(arr){
    let x=[];
for (let index = 0; index < arr.length; index++) {
    if(typeof arr[index]==='number'){
        x.push(arr[index]);
    }
    
}
  return x;
}
console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); 
// =======Example:7
function addUp(x){
    let y=0;
    for (let index = 0; index <= x; index++) {
       y+=index;
        
    }
    return y;

}
console.log(addUp(8)); 
function minMaxLengthAverage(arr){
    let x=[];
    let min=arr[0];
    let max=arr[0];
   let  sum=0;
     let length=arr.length;
    for (let index = 0; index < arr.length; index++) {
        if(min>arr[index]){
            min=arr[index];
        }
       
        if(max<arr[index]){
            max=arr[index];
        }
        sum += arr[index]; 
    }
    let average = sum / length;

    x.push(min);
    x.push(max);
    x.push(length);
    x.push(average);
    return x;
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); 
function convertToRoman(num) {
    // Mapping of Roman numerals
    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = ''; 
    
    for (let i = 0; i < romanNumerals.length; i++) {
      
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol; 
            num -= romanNumerals[i].value; 
        }
    }

    return result;
}


console.log(convertToRoman(3549)); 
console.log(convertToRoman(1990)); 
function countWords(string){
    let x = string.split(" ").length;
    return x;
}
console.log(countWords('hello from CodingAcademy!'));
function multiplyByLength(arr){
let l=arr.length;
let x=[];
for (let index = 0; index < arr.length; index++) {
     x.push(l*arr[index])
    
}
return x;
} 
console.log(multiplyByLength([4,2,5]));

function endsWith(str1, str2) {
    return str1.endsWith(str2);
}
console.log(endsWith("Hello, world!", "world!")); 
console.log(endsWith("JavaScript is fun", "fun")); 
console.log(endsWith("Programming", "ming"));

function doubleChar(arr){
    let c=arr.split('');
    let x=[];
    for (let index = 0; index <c.length; index++) {
        
        x.push(c[index]);
        x.push(c[index]);
    }
    return x.join('');
}
console.log(doubleChar('Coding')); 

function findIndex(arr, element) {
    return arr.indexOf(element);
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));function absoluteSum(arr) {
    
    return arr.reduce((sum, current) => sum + Math.abs(current), 0);
}


console.log(absoluteSum([1, -2, 3, -4]));