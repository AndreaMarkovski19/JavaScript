// EXERCISE_01
// WEIGHT CALCULATOR IN CHICKENS
// Write a function named weightInChickens that:
// Takes an input weigh in kilograms
// Calculates weight in chickens ( 1 chicken = 0.5kg )
// The input should be entered through prompt
// The result should be shown in the HTML of the page
// Note:The html page needs to have title and result paragraph

// let main = document.getElementsByTagName("body")[0];
// main.innerText = "";

// function weightInChickens(weight) 
// {
//     let result = weight / 0.5;
//     return main.innerText += "You weight " + result + " chickens.";     
// }

// let weight = parseInt(prompt("Enter your weight in kg: "));
// weightInChickens(weight);



// EXERCISE_02
// Change the page with JavaScript
// Change the text of all paragraphs and headers with javascript

// let allPara = document.getElementsByTagName("body")[0].getElementsByTagName("p");

// for (let i = 0; i < allPara.length; i++) 
// {
//     allPara[i].innerText = "";
//     allPara[i].innerText = "Andrea!!!";
//     console.log(allPara[i].innerText);
// }

// let allH1 = [] = document.getElementsByTagName("body")[0].getElementsByTagName("h1");
// let allH3 = document.getElementsByTagName("body")[0].getElementsByTagName("h3");

// for (let i = 0; i < allH1.length; i++) 
// {
//     allH1[i].innerText = "";
//     allH1[i].innerText = "MARKOVSKI!!!";
//     console.log(allH1[i].innerText);
// }

// for (let i = 0; i < allH3.length; i++) 
// {
//     allH3[i].innerText = "";
//     allH3[i].innerText = "Bukureska!!!";
//     console.log(allH3[i].innerText);
// }



// EXERCISE_03
// Print all numbers from an array and the sum
// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

// let arr = [2, 4, 6, 8, 10, 12];

// let main = document.getElementsByTagName("body")[0];
// main.innerHTML = "";

// for (let i = 0; i < arr.length; i++) 
// {    
//     main.innerHTML += `<li>${arr[i]}</li>`;   
// }

// let sum = 0;
// for (let i = 0; i < arr.length; i++) 
// {
//     sum = sum + arr[i];    
// }

// main.innerText += `\n\nThe total sum is: ${sum}`;



// EXERCISE_04
// Create a recipe page from inputs
// Ask the user for the name of the recipe
// let recipeName = prompt("Enter the name of the recipe: ");

// Ask the user how many ingredients do we need for the recipe
// let ingredientsCounts = parseInt(prompt("Enter the number of the ingredients: "));

// Ask the user for the name of every ingredient
// let ingredients = [];

// for (let i = 0; i < ingredientsCounts; i++) 
// {
//     let ingredient = prompt("Enter " + (i + 1) + " ingredient: ");
//     ingredients.push(ingredient);
// }

// Print the name of the recipe in the HTML as header
// let bodyElement = document.getElementsByTagName("body")[0];
// bodyElement.innerHTML += "<h1>" + recipeName + "</h1>";

// Print all ingredients as an unordered list in the HTML
// let allIngredientsHtml = "<ul>";
// let i = 0;

// while (i < ingredients.length) 
// {
//     let ingredientHtml = "<li>" + ingredients[i] + "</li>";
//     allIngredientsHtml += ingredientHtml;
//     i++;
// }

// allIngredientsHtml += "</ul>";
// bodyElement.innerHTML += allIngredientsHtml;