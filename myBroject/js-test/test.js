// var input1= h;
// var input2=o;
// var input3=m;
// var i1,i2;

// if(i1==input1&&i2==input2){
// console.log("o");

// }
// else if(i1==input1&&i2==input3){
//     console.log("h");
// }
// else if(i1==input2&&i2==input3){
//     console.log("m");
// }
// var  marker=70;
// switch (marker){
//     case (marker>=90):
//         console.log("A");
//         break;
//     case (marker<90&&marker>=80):
//          console.log("B");
//             break;
//     case (marker<80&&marker>=70):
//                 console.log("c");
//                    break;
//      case(marker<60):
//                     console.log("f");
//                        break;
    
// }
// var score=90;
// switch(score) {
//     case (score <= 100 && score >= 90):
//         console.log("A");
//         break;
//     case (score <= 89 && score >= 80):
//         console.log("B");
//          break;
//     case (score <= 79 && score >= 70):
//         console.log("C");
//          break;
//        case (score <= 69 && score >= 60):
//         console.log("D");
//          break;
//     case (score <= 59 && score >= 0):
//         console.log("f");
//         break;
// }
var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];
var w;
for (var i = 0; i < array1.length; i++) {
    w = array1[i]
    array1[i] = array2[i];
    array2[i] = w;
    
}

console.log(array1);
console.log(array2);
