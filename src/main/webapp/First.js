"use strict";
//use strict - this catches every error and does not allow 
//JS to auto assume or auto correct 
//this is a epic variable 
var i = 6 ;
console.log("see me shine !");//retuns:see me shine !
console.log(i);//returns: 6
console.log(9);//returns :9
//above lin  e to see content in web console
i=88;
console.log("value of updated i is:",i);//returns: 88
//variables are cool , they allow you to store some piece of data 
var awesome=prompt(" enter name :")
//above line open a box before the website loads 
console.log("hello :",awesome);   
//Learning : Functions 
function AwesomeFunc() //generating a function 
{
	//here comes the function code 
	console.log("hello");
	console.log("and");
	console.log("good bye");
}

function sum(num1,num2)
{
	var result = num1+num2;
	console.log(result);
}

function SumReturn(num1,num2)
{
	var result = num1 + num2; 
	return result;
}
AwesomeFunc();//calling a function AwesomeFunc
sum(4,7);//calling a function sum
console.log("calling a function SumReturn :",SumReturn(9,5));//calling a function SumReturn within console.log

var epicVar = SumReturn(2,100); //making a variable take the value returned by the function 
console.log(epicVar);//printing the valuue stored in variable epicVar
