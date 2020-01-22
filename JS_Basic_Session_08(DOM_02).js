// Example_01(DOM)
// let myApp = document.getElementById("app");
// let titleDiv = myApp.firstElementChild;
// let contentDiv = myApp.children[1];

// let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
// let subjects = ["Math", "English", "Science", "Sport"];
// let grades = ["A", "B", "A", "C"];

// function printGrades(subjects, grades, element) 
// {
//     console.log(element);
//     element.innerHTML = ""; // clearing element
//     element.innerHTML += "<ul>";
//     for (let i = 0; i < subjects.length; i++) 
//     {
//         element.innerHTML += `<li>${subjects[i]}: ${grades[i]}</li>`;
//     }
//     element.innerHTML += "</ul>"
// }

// function printStudents(students, element)
// {
//     element.innerHTML = ""; // clearing element
//     element.innerHTML += "<ol>";
//     for(let student of students){
//         element.innerHTML += `<li>${student}</li>`;
//     }
//     element.innerHTML += "</ol>"
// }

// function academyPanel(person, name)
// {
//     if(person === "student" && name.length >= 2)
//     { // if it is student and has name longer than 1 letter
//       titleDiv.innerHTML += "<h1><b>Hello there " + name + "</b></h1>";
//       titleDiv.innerHTML += "<p>Welcome to your student page</p>";
//       contentDiv.innerHTML += "<h3>Your grades:</h3>"
//       console.log(contentDiv);
//       printGrades(subjects, grades, contentDiv);
//     } 
//     else if(person === "teacher" && name.length >= 2)
//     {
//       titleDiv.innerHTML += `<h1><b>Hello ${name}!</b></h1>
//       <p>Welcome to your teachers page</p>`;
//       contentDiv.innerHTML += "<h3>Your students:</h3>"
//       printStudents(students, contentDiv);
//     } 
//     else 
//     {
//       titleDiv.innerHTML += "<h1><b>Your login was unsucessfull</b></h1>";
//       titleDiv.innerHTML += "<p>Please try again!</p>";
//     }
// }

// let input = prompt("Are you a student or a teacher?");
// let name = prompt("What is your name?");
// academyPanel(input, name);



// EXERCISE_01
// MANIPULATE THE DOM

// Select the first div
// let firstDiv = document.getElementById("first");
// console.log(firstDiv);
// console.log(firstDiv.textContent);

// Select all paragraphs
// let allParagraphs = document.getElementsByClassName("paragraph");
// console.log(allParagraphs);
// console.log(allParagraphs.textContent);

// Select the last div
// let lastDiv = document.getElementsByTagName("body")[0].lastElementChild;
// console.log(lastDiv);

// Select the header 3 in the last div
// let header3 = document.getElementsByTagName("body")[0].lastElementChild.previousElementSibling.children[1];
// console.log(header3);

// Select the header 1 in the last div
// let lastDiv = document.getElementsByTagName("body")[0].lastElementChild.previousElementSibling;
// let header1LastDiv = lastDiv.getElementsByTagName("h1")[0];
// console.log(header1LastDiv);

// Get the text from the first paragraph in the second div
// let secondDiv = document.getElementsByTagName("body")[0].getElementsByTagName("div")[1];
// let firstPara = secondDiv.getElementsByTagName("p")[0];
// console.log(firstPara.textContent);

// Add the word "text" to the text element in the second div
// let secondDiv = document.getElementsByTagName("body")[0].getElementsByTagName("div")[1];
// let textElement = secondDiv.getElementsByTagName("text")[0];
// textElement.innerText += " text.";
// console.log(textElement.innerText);

// Change the text of the header 1 in the last div
// let lastDiv = document.getElementsByTagName("body")[0].lastElementChild.previousElementSibling;
// let h1LastDiv = lastDiv.getElementsByTagName("h1")[0];
// h1LastDiv.innerText = "Andrea Markovski";
// console.log(h1LastDiv.innerText);

// Change the text of the header 3 in the last div
// let lastDiv = document.getElementsByTagName("body")[0].lastElementChild.previousElementSibling;
// let h3LastDiv = lastDiv.getElementsByTagName("h3")[0];
// h3LastDiv.innerText = "NEW TEXT!"
// console.log(h3LastDiv.innerText);