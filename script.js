// // console.log("Hello");
// // console.log(document);
// document.getElementById('greeting-h1').innerHTML = "Hello, Tim";
// document.getElementById('subheader').innerHTML = "A new subheader!";

// // Generate a list using Javascript
// document.getElementById('list-container').innerHTML = `
// <ul class="music-list">
//     <li>Lupe Fiasco</li>
//     <li>Kendrick Lamar</li>
//     <li>Kanye West</li>
// </ul>
// `;

// // -----variables
// // set up a string variable with the data of Yassoori
// var username = "Yassoori";
// // number variable
// var age = 26;
// // boolean variable true or false
// var hungry = false
// // -----view our data
// console.log({ username })
// // combining variables and strings

// // // this works 
// // console.log("your name is " + {username})

// // but this is better 
// console.log(`your age is ${age}`);
// console.log(`your name is ${username}`);
// console.log(`your hunger status is : ${hungry}`);

// // -----do an equation
// console.assertlog(`Your age times two is ${age * 2}`);
// console.log(`your age divided by 2 is ${age / 2}`);

// // this is an error
// console.log(`your name multiplied by 2 is ${username * 2}`);

// // this makes something funny
// console.log(`your name plus by 2 is ${username + 2}`);

// // -----showing multiple variables
// console.log(`your name is ${username} and your age is ${age}`);

// alert(`hello ${username}`);

// // -----pushing variables into html elements
// document.getElementById('greeting-h1').innerHTML = `Hello, your username is ${username}`;
// document.getElementById('subheader').innerHTML = `your hunger status is ${hungry}`;

// // temperature converter
// var tempCelcius = prompt(`Enter a temperature in Celcius`);

// var farenheight = (tempCelcius * 9 / 5) + 32;

// console.log({ farenheight });

// // activity; show full equation on screen

// document.getElementById('temp-celcius').innerHTML = `calculated by (${tempCelcius} * 9/5) + 32`;
// document.getElementById('temp-celcius').innerHTML = `
// ${tempCelcius} is equal to ${farenheight} degrees farenheight
// `;

// // ----- this is a way to shorten get element by id to just a var
// var resultDiv = document.getElementById("temp-result");

// -----functions

// function helloUser() {
//     var greeting = "Salamu Alaykum";
//     console.log(`Hello World`);
// }

// // run the function / invoke
// helloWorld();

// function byeWorld() {
//     console.log(`Goodbye World`);
// }

// another

// var firstName = prompt(`what is your name?`);

// function helloUser() {
//     alert(`Hello, ${firstName}`);
// }
// helloUser();

// ----- cloud learning
// 'Using three prompt()s, asks the user for 3 numbers.	
// Run a function afterwards which multiplies all three numbers together.
// Show the full equation on the screen e.g. 2 x 2 x 3 = 12
// The app should start by asking the user their 3 numbers.'

document.getElementById(`math-button`).addEventListener("click", mathFunction);
function mathFunction() {prompt(`give me a number`)};

document.getElementById(`math-button`).addEventListener("click", mathFunctionTwo);
function mathFunctionTwo() {prompt(`give me another number`)};

document.getElementById(`math-button`).addEventListener("click", mathFunctionThree);
function mathFunctionThree() {prompt(`give me one more number`)};

var equation = `
${num1} multiplied by ${num2} multiplied by ${num3} is equal to ${num1 * num2 * num3}
`;

document.getElementById('equation').innerHTML = equation

// document.getElementById('math-button').addEventListener("click", );
// function mathFunctionFour() 

// ('${numberOne} multiplied by ${numberTwo} multiplied by ${numberThree} is equal to ${numberOne * numberTwo * numberThree}`)
