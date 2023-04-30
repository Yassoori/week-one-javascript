// declare elements
// var toggleDarkModeButton = document.getElementById("toggle-darkmode");
// const image = document.getElementById("picsum-img");
// var header = document.getElementById("header");

// function toggleDarkMode() {
//     document.body.classList.toggle("dark-mode");
// }

// listen for a click
// toggleDarkModeButton.addEventListener("click", toggleDarkMode)
// image.addEventListener("click", function () {
//     image.style.transform = "scale(0)";
// })

// Activity: make it so when you click on the H1,
// set the color of it to red.

// 1. Declare the H1 as a variable.
// 2. Add an eventlistener for a click on the H1.
// 3. Set the style property of the H1 to color: red.

// var pickedColor = prompt("What color do you want your H1 to be, on click?");

// header.addEventListener("click", function () {
//     console.log("test");
//     header.style.color = pickedColor;
// })

// Let, const, var

// Activity:

// 1. Remove the lorem picsum image from your HTML.
// 2. Give the user a prompt, asking them for the size of the image.
// 3. Create your image, using backticks, using JS instead, 
// putting it into an element via innerHTML.
// 4. Make the lorem image become that size.

let pwidth = prompt(`how wide should the image be?`);
let pheight = prompt(`how tall should the image be?`);
let imagepicsum = document.getElementById(`jsimage`)

document.getElementById(`jsimage`).innerHTML = `
<img id="picsum-img" src="https://picsum.photos/" alt="random image">
`;

imagepicsum.style.width = pwidth
imagepicsum.style.height = pheight

// // this is how Tim did it:

// const result = document.getElementById("result");
// let size = prompt("size?")
// result.innerHTML = `
// <img id="picsum" src="https://picsum.photos/${size} 
// alt="random image">
// `

// -----loops

const loopResult = document.getElementById("loop-result");

// for (let count = 0; count < 80; count++) {
//     console.log({ count });
//     loopResult.innerHTL += `
//     <div class="product">
//     <img src="https://picsum.photos/seed-${count * 7}/picsum/300" alt="random image"> 
//     <h3>Product name</h3>
//     <p>Description goes here</p>
//     </div>
//     `
// };

// pixel art

const canvas = document.getElementById("canvas");

for (i = 0; i < 50; i++) {
    canvas.innerHTML += `
    <div class="cube"></div>
    `
}

// grab all the cubes
const allCubes = document.getElementsByClassName(`cube`);
// console.log({allCubes});
// grab all the colors from the palette
const allColours = document.getElementsByClassName("colour")

// declare our base color
let currentColor = prompt("Choose your color");

// loop over all allColours, and check for a click
for (let i = 0; i < allColours.length; i++) {
    allColours[i].addEventListener("click", function(){
        currentColor = allColours[i].id;

        // console.log(allColours[i].id);
    })
}

// looping over all the cubes
for (let i =0; i < allCubes.length; i++) {
    // logging each individual cube
    // console.log(allCubes[i]);
    //add event listener
    allCubes[i].addEventListener("click", function(){
        // console.log(`you clicked me! I am cube number ${i}`);
        allCubes[i].style.background = currentColor;
    })
}

// logging a specific cube
// allCubes[2]


// console.log(allCubes.length);


// array example
// const students = [
//     "Yasser",
//     "Quinn",
//     "Ryan",
// ];

// console.log(students [2]);
