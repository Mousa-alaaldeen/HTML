let cash = 1000;
let currentLiabilities = 500;
let cashFlowRatio = cash / currentLiabilities;
console.log(cashFlowRatio);  
let  revenues= 1000;
let expenses= 500 ;
let NetIncome= revenues-expenses;
console.log(NetIncome); 
let liabilities= 1000;
let equity= 500;
let TotalAssets=liabilities+equity;
console.log(TotalAssets); 
let profit= 1000;
let sales =500;
let NetIncome2 =profit*sales;
console.log(NetIncome2);
let number1=7,number2=9,number3=2
let average =(number1+number2+number3)/3;
console.log(average);
let age = 20;
let ageLimit = age > 18 && age < 30;
console.log(ageLimit); 
let base = 2;
let exponent = 3;
let exponential = Math.pow(base, exponent);
console.log(exponential);  
let price =150;
let discount=0.30;
let discountEcual=price-(price* discount); 
let n=2;let n2=3;
// let  Exponential=Math.exponential(n,n2);
let nu = 10;
let nu2 = 4;
let remainder = nu % nu2;
console.log(remainder);  
//======================================================================
console.log(typeof(100));
console.log(typeof(73.9));
console.log(typeof(Nan));
console.log(typeof("Water"));
console.log(typeof(fale));
console.log(typeof(9 != 11));
console.log(typeof('"Orange" + "e"'));
console.log(typeof('"Orange" - "e"'));
console.log(typeof('"4" + "8"'));
console.log(typeof('"4" - "8"'));
console.log(typeof('"name" + "3"'));
console.log(typeof('"name" - "3"'));
console.log(typeof('82 + "word"'));
console.log(1=="1");
console.log(1==="1");
//========================================================================
var orange = "Welcome to Orang";
orange = orange.replace("Orang", "Orange");
console.log(orange.toLocaleUpperCase()); 

var to = orange.split(" ");
console.log(to[1].toLocaleUpperCase()); 
orange = "Hello from Orange";
console.log(orange); 
orange = "Welcome to Orange";
console.log(orange.toLocaleLowerCase()); 
console.log(orange.length); 
console.log('Welcome to "Orange"'); 
orange += " Jordan";
console.log(orange);
//==========================================
let arr = ["Coding", "Academy", "By", "Orange"];
console.log(arr);  
let arr2 = arr.slice(0, 2);
console.log(arr2); 
let arr3 = ["Welcome", "To", ...arr];
console.log(arr3); 
let arr4 = arr.slice(1);
console.log(arr4);  
let arr5 = arr.join(" ");
console.log(arr5);
console.log(arr)
let arr7 = [arr[0], arr[3]];
console.log(arr7);  
//=======================================
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop();
console.log(vegetables);  
fruit.shift();
console.log(fruit);
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex); 
fruit.push(orangeIndex);
console.log(fruit);
var vegLength = vegetables.length;
console.log(vegLength);
vegetables.push(vegLength);
console.log(vegetables); 
var food = fruit.concat(vegetables);
console.log(food);  
food.splice(4, 2);
console.log(food);
food.reverse();
console.log(food);
var foodString = food.join(", ");
console.log(foodString);
//======================================== Functions 

function stringToArray(str) {
    return str.split(" ");
}
let input="Orange Jordan" ;
let output = stringToArray(input);
console.log(output);

function mobilePhone(phoneNumber) {
   
    phoneNumber = String(phoneNumber);
    if (phoneNumber.length !== 10) {
        return "error"; 
    } else {
        return phoneNumber.slice(6); 
    }
}

let i = mobilePhone("0788740499");
console.log("******"+`${i}`); 
let email="orange_academy@orange.jo";
let emai_ = email.split("_");
console.log(emai_); 
let emaiList = emai_[1];
console.log(emaiList);
let tt = emaiList.split("@");
endEmail=emai_[0]+"..."+tt[1];
let emailCome = endEmail.replace('jo','com')
console.log(emailCome);

// var ww = document.querySelector("img");
// if (ww.hasAttribute("")) {
//     console.log("yyyyyyyyyyyyyyy");
// } else {
//     console.log("nnnnnnnnnnnn");
// }

// let myDiv=document.querySelector("div")
// if(myDiv.hasAttribute("class")){
//     console.log("yas");
    
// }
// else{
//     console.log("no");
    
// }
// let  myH1=document.querySelector("h1");
// if(myH1.hasAttribute("class")){
//     console.log("yy");
    
// }
// else{
//     console.log("nn");
    
// }
const div = document.getElementById('myDiv');
let  myH1=document.querySelector("h1");
if (div.hasAttribute('class')) {
  console.log('العنصر يحتوي على السمة class');
} else {
  console.log('العنصر لا يحتوي على السمة class');
}
if (div.hasAttribute('data-custom')) {
    console.log('العنصر يحتوي على السمة data-custom');
  } else {
    console.log('العنصر لا يحتوي على السمة data-custom');
  }
  if (div.hasAttribute('style')) {
    console.log('العنصر يحتوي على السمة style');
  } else {
    console.log('العنصر لا يحتوي على السمة style');
  }