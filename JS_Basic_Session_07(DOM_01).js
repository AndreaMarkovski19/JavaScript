// SELECTING BY ID
// let myHeader = document.getElementById("myTitle");
// console.log(myHeader); // Will give us the whole element node
// console.log(myHeader.textContent); // Will give us the text inside the element

// SELECTING BY CLASS
// let paragraphs = document.getElementsByClassName("myParagraph"); 
// let secondParagraph = document.getElementsByClassName("second"); 
// console.log(paragraphs); // Will give us an array with 2 paragraphs
// console.log(paragraphs[0]); // Will give us the first paragraph
// console.log(secondParagraph); // Will give us an array with 1 paragraph
// console.log(secondParagraph[0]); // Will give us the only paragraph

// SELECTING BY TAG NAME
// let paragraphs = document.getElementsByTagName("p"); 
// let texts = document.getElementsByTagName("text"); 
// console.log(paragraphs); // Will give us an array with 2 paragraphs
// console.log(paragraphs[0]); // Will give us the first paragraph
// console.log(texts); // Will give us an array with 1 text
// console.log(texts[0]); // Will give us the only text

// QUERY SELECTORS
// let paragraphs = document.querySelectorAll("p"); 
// let firstP = document.querySelector(".myParagraph");
// let header = document.querySelector("#myTitle");
// console.log(paragraphs); // Will give us an array with 2 paragraphs
// console.log(firstP); // Will give us the first paragraph it finds
// console.log(header); // Will give us the first header it finds

// FINDING SIBLING ELEMENTS
// let paragraph = document.getElementsByClassName("myParagraph")[0];
// let sibling = paragraph.nextElementSibling; // We add the next sibling element here
// console.log(paragraph); // The first paragraph
// console.log(sibling); // The second paragraph
// console.log(sibling.previousElementSibling); // Will log the first paragraph again

// FINDING THE PARENT ELEMENT
// let paragraph = document.getElementsByClassName("myParagraph")[0];
// let parentDiv = paragraph.parentElement; // We take the parent of the paragraph
// console.log(paragraph); // The first paragraph
// console.log(parentDiv); // The second paragraph

// FINDING CHILD ELEMENTS
// let myDiv = document.getElementById("main");
// let divChildren = myDiv.children; // All children of myDiv
// let divFirstCh = myDiv.firstElementChild; // Get first child of myDiv
// let divLastCh = myDiv.lastElementChild; // Get last child of myDiv
// console.log(divChildren); // Array of all children of myDiv
// console.log(divFirstCh); // The first child element of myDiv
// console.log(divLastCh); // The last child element of myDiv

// GETTING TEXT
// let myDiv = document.getElementById("main");
// let textSpaces = myDiv.textContent; // Get content with white spaces
// let textNoSpaces = myDiv.innerText; // Get content without white spaces
// console.log(textSpaces);
// console.log(textNoSpaces);

// CHANGING TEXT IN AN ELEMENT
// let header = document.getElementById("myTitle");
// console.log(header.innerText); // Checking what the text is
// header.innerText = ""; // Changing the text to nothing
// console.log(header.innerText);
// header.innerText = "New TEXT!";
// console.log(header.innerText);
// header.innerText += " Ultra new text";
// console.log(header.innerText);

// CHANGING AND ADDING CODE
// let myDiv = document.getElementById("main");
// console.log(myDiv);

// ADDING NEW ELEMENT IN THE DIV
// myDiv.innerHTML += `<p class="new"> 
// Paragraph generated from JavaScript
// </p>`;
// console.log(myDiv);
// myDiv.innerHTML = ""; // removing all code from myDiv

// *nodeValue - lets you access or update contents of a text node.
// *innerHTML - allows access to child elements and text content.
// *textContent - allows access to the text content only.
// *createElement()
// *createTextNode()
// *appendChild()/removeChild()

// *hasAttribute() - checks if an attribute exists.
// *getAttribute() - gets it's value.
// *setAttribute() - updates the value.
// *removeAttribute() - removes an attribute