/**************************************************
 *  Author:       Rayel Tiomela                  *
 *  Course:       CT-376 JavaScript               *
 *  Assignment:   Module 0, Hw0 - Installation    *
 *  File:         first.js                          *
 *  Description:  A "minimal" JavaScript program  *
 *  Input:        Button click                    *
 *  Output:       one-line message on webpage     *
 *  Created:      1/13/2024                       *
 **************************************************/

function showClicked() {
	document.getElementById("result").innerHTML = "My name is Rayel Tiomela";
	confirm("Are you sure you want to delte it?");
}

function grab(person)
{

	document.getElementById("demo").innerHTML = "I am just learning how to use this";
	/*
	let name = person;
    console.log(name);
	let interestRate = 0.3;
	let selectedColors = ["red", "blue"];
	//if you use 'const' then you can't reassign that variable
	//const interestRate= 1;
	let classmate = {name: "Gordon", age: "20"};
	console.log(classmate.name);
	console.log(selectedColors[1]);
	*/
}
//performing a task
grab("Rosette");
grab("Isaac");

function square(number)
{
	return number*number;
}

console.log(square(5));
