// THREE WAYS TO BIND AN EVENT TO AN ELEMENT:
/*
1. HTML event handlers: < a onclick = "hide()" > < /a>

2. Traditional DOM event handlers - Separate the JavaScript from the HTML.You can only attach a single
function to any event.

var elem = document.getElementById("btnHello");
elem.onclick = sayHello;
function sayHello() 
{
    alert("Hello World");
}

3. DOM level 2 event listeners - Allow one event to trigger multiple functions.

var elem = document.getElementById("username");
elem.addEventListener("blur", function () {
    var greeting = `Hello ${elem.value}`;
    alert(greeting);
}); 
*/


// REMOVE EVENT LISTENERS
/* 
elem.addEventListener("mousemove", setColorToDiv);
elem.removeEventListener("mousemove", setColorToDiv); 
*/


//If you need to pass arguments to a function that is called by an event handler or listener, you wrap the function call in an anonymous function.
/*
elUsername.addEventListener('blur', function () 
{
    checkUsername(5);
}, false);
*/


// EVENT FLOW - HTML elements nest inside other elements. By clicking on a link, you are clicking on its parent element as well.


// EXERCISE_01
// CHANGE THE PARAGRAPH STYLE
// In HTML page create one paragraph with text, and one button
// Create Javascript function that will change the style of the paragraph.
// Onclick call the function changeStyle()
// paragraph must change Color,Font Style, and Font Size

// var changePara = document.getElementById('para1');
// var button = document.getElementById('button1');

// button.addEventListener('click', changeStyle);

// function changeStyle() {
//     var x = changePara.style;
//     x.color = "red";
//     x.fontStyle = "italic";
//     x.fontSize = "xx-large";
// };


// EXERCISE_02
// REGISTER USER
// Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
// On click of the button call a function that will get all the inputs' values and use the values as parameters for a new function which will
// add them to string
// Finaly print the values


var button = document.getElementById("button");
button.addEventListener("click", checkFN);



function checkFN(firstName)
{
    let firstName = document.getElementById("fName").value;   


    
}
