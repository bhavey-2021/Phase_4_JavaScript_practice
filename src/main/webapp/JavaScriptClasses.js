"use strict";
class vehicle
{
	constructor(x,y)
	{
		console.log("The position of x is :"+x);
		console.log("The position of y is :"+y);
		console.log("This is a constructor ! ");
	}
	VehicleFunc()
	{
		console.log("This fxn is from Vehicle class")
	}
}
class car extends vehicle
{
	EpicFun()
	{
		console.log("hello from EpicFun");
	}
	static StaticFun()
	{
		console.log("This is epicly static !");
	}
	VehicleFunc()
	{
		super.VehicleFunc();
		console.log("This is a car class ");
	}
}
class bike extends vehicle
{ 
	
}
var carObj = new car(4,8);//o/p:-
//The position of x is :4
//The position of y is :8
//This is a constructor in car ! 
carObj.EpicFun();//o/p-hello from EpicFun
car.StaticFun();//o/p-This is epicly static !
//above is a way how we call static fxn
//Stastic fxn does not require object 

//Learning : Instanceof Operator 
var bikeObj = new bike(5,10);//o/p:-
//The position of x is :5
//The position of y is :10
//This is a constructor in bike ! 
var isValid = carObj instanceof car; //to check if carObj is an instance of car 
console.log(isValid);//o/p - true
var isValid01 = carObj instanceof bike; //to check if carObj is an instance of var isValid = carObj instanceof car; //to check if carObj is an instance of car 
console.log(isValid01);//o/p - false 
var isValid02 = bikeObj instanceof bike; //to check if bikeObj is an instance of var isValid = carObj instanceof car; //to check if carObj is an instance of car 
console.log(isValid02);//o/p - true 

//Learning Class inheritance 
bikeObj.VehicleFunc();//o/p-This fxn is from Vehicle class
console.log("------------")
//Learning Method Overloading 
carObj.VehicleFunc();//o/p-This is a car class 
//when we overload the method , it takes the most updated data from the function 

//Learning supper keyword 

//we use super keyword when we need the original functonality 
// of the parent class too 

// after adding super keyword in the car ext vehicle class 
// we get the o/p of carObj.VehicleFunc(); as :-
//This fxn is from Vehicle class
//This is a car class 

// i.e ; both the funcionality of parent and sub class are peformed after using super keyword 

























