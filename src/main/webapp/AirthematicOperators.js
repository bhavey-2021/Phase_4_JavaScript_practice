"use strict";
console.log(9);
//adition operator 
console.log(6+5);
//increment and decreemnt 
var num = 7;
num++
console.log(num);
var num1 = 9;
num1--
console.log(num1);

//comparisin 
var var1 = 1 ;
var var2 = 4 ; 
console.log(var1 == var2); //result is false
console.log(var1 < var2); //result is true
// "==" checks with a view point of human eye 
//"===" checks withh a view point of computer || checking data type too 
var a1 = 9;
var a2 = "9";
console.log(a1 == a2); //result is true
console.log(a1 === a2); //result is false || 9 !="9" || int != char

//Logical operators 
var b1 = true ; 
var b2 = false ; 

//AND operator 
console.log(b1 && b2); //result is false
console.log(b1 || b2); //result is true 

// bitwise operator 
console.log("bitwise operator ");
var c1 = 27 ; // 27 in binary - 11011
var c2 = 22 ; // 22 in binary - 10110
// 11011 & 10110 = 10010 {10010 - 18 }
console.log(c1 & c2);//result is 18

//Assignment operator 
// "=" is a assignemt operator 

//Conditional Operator 

var d1 = 9;
var d2 = 100;
var result = (9==100) ? "yes":"no";
//if d1 = d2 --> assign result = yes 
//if d1!=d2 --> assign result = no 
console.log(result);

//typeof operator 
var e1 = 10001;
var e2 = "hello world"; 
console.log(typeof e1);//returns - number  
console.log(typeof e2);//returns - string 





























