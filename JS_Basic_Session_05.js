//Exercise_01
//Create a function sayHello that will alert 'Hello


// var name;

// function sayHello(name)
// {
//     name = prompt("Enter your name please: ");
//     return "Hello " + name + "! :)"
// }

// alert(sayHello(name));



//Exercise_02
//Create a function that will add two given numbers and return the result.
//Call it more than once with different values for parameters.

// function addNumbers(num1, num2) 
// {
//     var result = num1 + num2;
//     return result;
// }

// alert(addNumbers(3, 4));
// alert(addNumbers(5, 10));
// alert(addNumbers(7, 7));



//Exercise_03
//Write a function that will be able to convert Celsius to Fahrenheit and display the result.

// function celsiusToFahrenheit(C) 
// {
//     var fahrenheit = Math.round((1.8*C) + 32);
//     return fahrenheit;
// }

// var result = celsiusToFahrenheit(37);
// alert(result);


// function fahrenheitToCelsius(F) 
// {
//     var celsius = Math.round((5/9) * (F-32));
//     return celsius;
// }

// var result1 = fahrenheitToCelsius(99);
// alert(result1);



//Exercise_04
//THE AGE CALCULATOR
//Takes 2 arguments: birth year, current year. Calculates the age based on those years. 
//Outputs the result to the screen like so: "You are NN years old". Call the function three times with different sets of values.
//Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// var currentYear = new Date().getFullYear();

// function ageCalculator(birthYear, currentYear)
// {
//     result = currentYear - birthYear;
//     return result;
// }

// alert("You are " + ageCalculator(1984, 2019) + " years old.");
// alert("You are " + ageCalculator(1980, 2019) + " years old.");
// alert("You are " + ageCalculator(1990, 2019) + " years old.");

// alert("You are " + ageCalculator(2015, currentYear) + " years old.");



//Exercise_05
//Calculate the power(exponent) of a given number.

// var num1 = parseInt(prompt("Enter the number: "));
// var exp = parseInt(prompt("Enter the exp: "));

// function exp(num1, exp)
// {
//     var result = Math.pow(num1, exp);
//     return result;
// }

// var result = exp(3, 3);
// alert("The result is " + result);



//Exercise_06
//ATM MACHINE PROGRAM

// var balance = 1000;
// var deposit;
// var withdrawal;

// var choice = parseInt(prompt(
//     "Select a choice:\n1) Balance\n2) Deposit\n3) Withdrawal\n4) Exit"
// ));

// if (choice !== 1 && choice !== 2 && choice !== 3 && choice !== 4) 
// {
//     alert("Invalid inputs. Try again.");    
// }
// else
// {
//     if (choice == 1) 
//     {   
//         alert("Your balance is: " + balance + " dolars.");        
//     }
//     else if (choice === 2) 
//     {        
//         deposit = parseInt(prompt("Please enter your deposit: "));
//         alert("Thank you. Now you have: " + (balance + deposit) + " dolars.");        
//     }
//     else if (choice === 3) 
//     {
//         withdrawal = parseInt(prompt("Please enter your withdrawal: "));
//         alert("Thank you. Now you have: " + (balance - withdrawal) + " dolars.");        
//     }
//     else if (choice === 4)
//     {
//         alert("Thank you. Bye bye!");        
//     } 
// }


//#2
// var balance = parseInt(prompt("Внеси ја почетната состојба: "));
// var options = parseInt(prompt("1. Check your balance." + "\n" +
// 	"2. Make a Deposit" + "\n" + "3. Make a Withdrawal" + "\n" +
// 	"4. Exit"));


// function checkYourBalance() {

// 	alert("Your current balance is " + balance + ".");
// 	return (alert);

// }


// function makeADeposit(deposit) {

// 	var deposit = parseInt(prompt("Внеси го твојот депозит: "));
// 	balance += deposit;
// 	alert("You entered a deposit of " + deposit + " denars."
// 		+ " Now your current balance is " + balance + ".")

// 	return (alert);

// }

// function makeAWithdrawal(withdrawal) {

// 	var withdrawal = parseInt(prompt("Внеси го износот за повлекување: "));
// 	balance -= withdrawal;
// 	alert("You withdrew a " + withdrawal + " denars."
// 		+ " Now your current balance is " + balance + ".")
// 	return (alert);

// }

// function exit() {

// 	alert("ATM exited");
// 	return (alert);

// }

// switch (options) {
// 	case 1:
// 		checkYourBalance();
// 		break;

// 	case 2:
// 		makeADeposit();
// 		break;

// 	case 3:
// 		makeAWithdrawal();
// 		break;

// 	case 4:
// 		exit();
// 		break;

// 	default:
// 		alert("Invalid inputs")
// 		break;
// }


//Exercise_07
//Return the count of divisors(without 1 and itself) for a given number

// var num = parseInt(prompt("Enter the number: "));
// var count = 0;
// var count1 = 0;
// var arr = [];
// var arrNew = [];

// for (let i = 2; i < num; i++) 
// {
//     if (num % i == 0 ) 
//     {
//         if (num % num == 0 && num % 1 == 0)
//         {    
//             arr.push(i);
//             count++;                   
//         }                
//     }    
// }

// alert("Total count of divisors is: " + count + " - " + arr);

//#2
// function countOfDivisors() {

// 	var number = parseInt(prompt("Vnesi broj: "));

// 	var divisors = 0;

// 	for (var i = 2; i < number; i++) {

// 		if (number % i === 0) {

// 			divisors++;

// 		}
// 	}

// 	alert(divisors);

// }

// countOfDivisors();



//Exercise_07
//Write a program that will print first 10 prime numbers.

// var i;
// var j;
// var flag;

// var num = parseInt(prompt("Enter the number: "));
// var first10PrimeNumbers = [];

// for (let i = 1; i <= num; i++) 
// {
//     if (i == 1 || i == 0) continue; 

//     flag = 1;

//     for (j = 2; j <= i / 2; ++j) 
//     { 
//         if (i % j == 0) 
//         { 
//             flag = 0; 
//             break; 
//         }
//     }

//     if (flag == 1)
//     {
//         first10PrimeNumbers.push(i);

//     }
// }

// alert("The first 10 prime numbers are: " + first10PrimeNumbers);


//#2
// function firstTenPrimeNumbers() {
// 	var primeNumbers = [];
// 	for (var i = 1; i < 100; i++) {
// 		if (isPrimeNumber(i)) {
// 			primeNumbers.push(i);
// 		}
// 		if (primeNumbers.length === 10) {
// 			break;
// 		}
// 	}


// 	alert(primeNumbers.toString());
// }

// function isPrimeNumber(num) {
// 	var result = true;
// 	for (var j = 2; j < num; j++) {
// 		if (num % j === 0) {
// 			result = false;
// 		}
// 	}
// 	return result;
// }

// firstTenPrimeNumbers();



//Exercise_08
//Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam 
//Hint: Treat string as array of characters

// var string = prompt("Enter a word: ");
// var arr = [] = string;
// var arrReverse = [];

// arrReverse = string.split("").reverse().join("");

// function isPalindrome()
// {
//     if (arr === arrReverse) 
//     {
//         alert("The word is a Palindrome.");
//     }
//     else
//     {
//         alert("The word is NOT a Palindrome.");
//     }
// };

// isPalindrome();


//Exercise_09
//Write a JavaScript program that will take the total number of balls, and the number of balls drawn, 
//and calculate the number of lotto combinations.
//Combination formula:C = n! / (k! * (n - k)!), where n represents the number of items, 
//and k represents the number of items being chosen at a time n!(factoriel) ex. 4! = 1*2*3*4

// var num = parseInt(prompt("Enter the Total number of balls: "));
// var k = parseInt(prompt("Enter the Numbers of balls drawn: "));

// function factorialize(x) 
// {
//     if (x < 0)
//         return -1;
//     else if (x == 0)
//         return 1;
//     else {
//         return (x * factorialize(x - 1));
//     }
// }

// var c = Math.floor((factorialize(num)) / ((factorialize(k)) * (factorialize(num - k))));

// alert("The number of lotto combinations is: " + c + ".");



//Exercise_10
//Write a function printAdress() that will print the user adress.
//Function will take 5 parameters: name, surname, street, number, city.
//Outputs the result to the screen like so: Name Surname lives on the street number, city
//Call that function three times, with three diferent persons.

// var name = prompt("Enter your Name: ");
// var surname = prompt("Enter your Surname: ");
// var street = prompt("Enter your Street: ");
// var number = parseInt(prompt("Enter your Number: "));
// var city = prompt("Enter your City: ");

// function printAdress(name, surname, street, number, city) {
//     alert(
//         "Your Name is " + name + "." + "\n" +
//         "Your Surname is " + surname + "." + "\n" +
//         "Your Street is " + street + "." + "\n" +
//         "Your Number is " + number + "." + "\n" +
//         "Your City is " + city + "."
//     )
// }

// printAdress(name, surname, street, number, city);



//Exercise_11
//Write a function named calculateDogAge() that:
//takes 1 parameters: your puppy's age.
//calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
//Call the function three times with different sets of values.
//**Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

// var puppysAge = parseInt(prompt("Enter your dog's age (human age): "));

// function calculateDogAge(puppysAge) 
// {
//     return Math.round(puppysAge * 7);
// }

// alert("Your doggie is " + calculateDogAge(puppysAge) + " years old in dog years!");



//Exercise_12
//Write a function named lifetimeCoffeeSupply() that:
//takes 2 parameters: age, amount of coffees per day.
//calculates the amount consumed coffees for rest of the life (take 100 as max age).
//outputs the result to the screen like so: "You will need NN coffees to last you until the ripe old age of X"
//Call that function three times, passing in different values each time.
//**Bonus: Accept floating point values for amount per day, and round the result to a round number.

// var age = parseInt(prompt("Enter your age: "));
// var coffesPerDay = parseFloat(prompt("Enter your amount of coffees per day: "));
// var result;

// function lifetimeCoffeeSupply(age, coffesPerDay) 
// {
//     result = Math.round((100 - age) * 365 * coffesPerDay);
//     return result;
// }

// lifetimeCoffeeSupply(age, coffesPerDay);

// alert("You will need " + lifetimeCoffeeSupply(age, coffesPerDay) + " coffees to last you until the ripe old age of 100.);



//Exercise_12
//Write a function named tellFortune() that:
//takes 4 arguments: number of children, partner's name, geographic location, job title.
//outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.


// function tellFortune(numberOfChildren, partnersName, geographicLocation, jobTitle) 
// {
//     alert("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName +  " with " + numberOfChildren + " kids.")
// }

// tellFortune(parseInt(5), "Kate", "Skopje", "WebDeveloper");