"use strict"
var num1 = 9;
var num2 = 314;
if(num1<num2)
{
	//if the "if" condition is true the below line will execute 
	console.log("num1 is less than num2")
}
var num01 = 900;
var num02 = 314;
if(num01<num02)
{
	//if the "if" condition is true the below line will execute 
	console.log("num1 is less than num2")
}
else 
{
	//if the "if" condition is true the below line will execute 
	console.log("num01 is greater than num02")
}

//Switch statemennt 
var awesomeVar = 5 ; 
switch (awesomeVar)
{
		case 0 : 
	console.log("this is 0");
	break ; 
		case 1 : 
	console.log("this is 1");
	break ; 
		case 2 : 
	console.log("this is 2");
	break ; 
		case 3 : 
	console.log("this is 3");
	break ; 
		case 4 : 
	console.log("this is 4");
	break ; 
		case 5 : 
	console.log("this is 5");
	break ; 
		default :
	console.log("this is a default value ");	
}

//for loop 
for(var i = 0;i<=100;i=i+10)
{
	//everything in curly braces will run 
	//untill the for loop is running 
	console.log(i);
}//this for loop prints [0 10 20 30 40 50 60 70 80 90 100]

//For in Loop 
var amazingObject = {a:1 , b:2 , c:3 , d:4};
console.log(amazingObject['c']);

for(var item in amazingObject)//this means : itterate every item in amazingObject 
{
	console.log(item + " : " +amazingObject[item]);
}//this for loop prints every element in the given object 

//While loop 
var j = 0;
while(j<=100)
{
	console.log("this is position for J:"+j);
	j+=20;
}//loop prints [0 20 40 60 80 100]

//do while loop 

var k = 0 ; 
do
{
	console.log("this is a position for K:" + k);
	k=k+40;
}while(k<=200)
//the o/p of this loop is [ 0 40 80 120 160 200]

//Loops advanced 
	//usage of braek and continue statement 
for(var i = 0 ; i<=100 ; i+=10)
{
	if(i===50)
	{
		break ; //break will stop execution as we reach at "50"
		//continue; //continue will skip "50" and work on rest 
	}
	console.log("this is position for I:" +i);
}

































 



















