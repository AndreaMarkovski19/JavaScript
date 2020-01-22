//Exercise_01
//Write an algorithm to determine a student’s final grade and indicate whether it is passing or failing. 
//The final grade is calculated as the average of four marks.

// var grade1 = parseInt(prompt("Enter the first grade: "));
// var grade2 = parseInt(prompt("Enter the second grade: "));
// var grade3 = parseInt(prompt("Enter the third grade: "));
// var grade4 = parseInt(prompt("Enter the fourth grade: "));

// var finalGrade = (grade1 + grade2 + grade3 + grade4) / 4;

// if ((grade1 < 0 || grade1 > 5) || (grade2 < 0 || grade2 > 5) || (grade3 < 0 || grade3 > 5) || (grade4 < 0 || grade4 > 5)) 
// {
//         alert("Invalid inputs.");
// }
// else 
// {
//         if (finalGrade >= 3 && finalGrade <= 5) {
//             alert("The final grade is " + finalGrade + ". The student is passing.");
//         } else {
//             alert("The final grade is " + finalGrade + ". The student is failing.");
//         }
// }



//Exercise_02
//Write javascript code that will calculate which Chinese Zodiac a given year is in

// var birthYearUser = parseInt(prompt("Enter your birthday: "));
// var chineseZodiac;

// if (birthYearUser < 1950 || birthYearUser > 2000) {
//     alert("Invalid year.");
// } else {
//     chineseZodiac = Math.round((birthYearUser - 4) % 12);

//     switch (chineseZodiac) {
//         case 0:
//             alert("You are RAT.");
//             break;
//         case 1:
//             alert("You are OX.");
//             break;
//         case 2:
//             alert("You are TIGAR.");
//             break;
//         case 3:
//             alert("You are RABBIT.");
//             break;
//         case 4:
//             alert("You are DRAGON.");
//             break;
//         case 5:
//             alert("You are SNAKE.");
//             break;
//         case 6:
//             alert("You are HORSE.");
//             break;
//         case 7:
//             alert("You are GOAT.");
//             break;
//         case 8:
//             alert("You are MONKEY.");
//             break;
//         case 9:
//             alert("You are ROOSTER.");
//             break;
//         case 10:
//             alert("You are DOG.");
//             break;
//         case 11:
//             alert("You are PIG.");
//             break;

//         default:
//             alert("Invalid inputs.");
//             break;
//     }
// }



//Exercise_02
//Calculate the product of first 10 natural numbers.

// var result = 1;

// for (var i = 1; i <= 10; i++) {
//     alert(i);
//     result = result * i;
// }

// alert("The product of first 10 natural numbers is " + result + ".");



//Exercise_03
//Write a program that will read number from the user and alert him the count of digit 7.

// var number;

// for (let i = 0; i < 100; i++) {
//     number = parseInt(prompt("Enter a number: "));

//     if (number === 7) {
//         alert("The number is 7. Stop.");
//         break;
//     }
// }



//Exercise_04
//Write a program that will read numbers from the user and alert him if number is already entered.

// var numbers = [];
// var number;

// for (let i = 0; i <= 4; i++) {

//     number = parseInt(prompt("Enter a number: "));

//     for (let i = 0; i < numbers.length; i++) 
//     {        
//         if (number === numbers[i]) 
//         {
//             alert("The number is already in the array.");        
//         }        
//     }
//     numbers.push(number);
// }
// alert("The numbers are: " + numbers);


//Second approach
// var inputs = [];
// var alreadyEntered = false;

// while (!alreadyEntered) {
// 	var input = prompt('Enter number: ');

// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i] === input) {
// 			alert("Already entered!");
// 			alreadyEntered = true;
// 			break;
// 		}
// 	}

// 	inputs.push(input);
// }
// alert("The numbers are: " + inputs);



//Exercise_05
//Write an JavaScript program that will take the total number of balls, 
//and the number of balls drawn, and calculate the number of lotto combinations.

// var totalNumberOfBalls = n = parseInt(prompt("Enter the total number of balls: "));
// var numberOfBallsDrawn = k = parseInt(prompt("Enter the number of balls drawn: "));

// function factorial(n) {
//     if (n > 0 && n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// };

// var numberLottoCombinations = parseInt(factorial(n) / ((factorial(k) * factorial(n - k))));

// alert("The number of all lotto combinations is: " + numberLottoCombinations);