// EXERCISE_01&02
// Write a JavaScript function to retrieve all the values of an object's properties
// Sample Output (use alert): "David Rayy","VI",12

// var student = {
//     name: "David Rayy",
//     group: "V",
//     id: 12
// };

// function student1() 
// {
//     var name = student.name;
//     var group = student.group;    
//     var id = parseInt(student.id);

//     return alert(name + group + id);
// }

// function delete1() 
// {
//     var name = student.name;
//     delete student.group;    
//     var id = parseInt(student.id);

//     return alert(name + id);
// }

// student1();
// delete1();



// EXERCISE_03
// Write a JavaScript function to check if an object contains given property

// var obj = {
//     name: "David Rayy",
//     group: "V",
//     id: 12
// };

// var obj1 = new Object();

// function check(x) 
// {
//     if (Object.keys(x).length === 0) 
//     {
//         alert("NEMA.");
//     } 
//     else 
//     {
//         alert("IMA.");
//     }
// }

// var z = check(obj);
// var z1 = check(obj1);

//#2
// let count = 0;

// for (var c in student) {
//     count = count + 1;
// }

// if (count != 0) {
//     alert("The current object has " + count + " properties.");
// } else {
//     alert("The current object has 0 properties.");
// }



// EXERCISE_04
// Create a car object with some properties
// (model, color, year, fuel, fuelConsumption) and a method (howMuchFuel(distance)) 
// that returns how much fuel you will need to pass some distance.


// var car = {

//     model: "Opel",
//     color: "Blue",
//     year: 1990,
//     fuel: "Diesel",
//     fuelConsumption: 6,
//     howMuchFuel(distance) 
//     {
//         var result = (distance / 100) * this.fuelConsumption;
//         return alert("You will need " + result + " litars of fuel.");
//     }

// }

// car.howMuchFuel(200);



// EXERCISE_05
// 1.	Create OBJECT animal with two properties and one method:
// •	name
// •	kind
// •	speak (method)
// this method will take one parameter and will printing in the console the message:
// e.g. dog.speak(“hey bro!!!”) will write in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt()


// var animal = 
// {
//     name: "",
//     kind: "",
//     speak() 
//     {
//         alert(animal.kind + " says: 'Hey bro!!'");    
//     }
// };

// animal.name = prompt("The name of the animal: ");
// animal.kind = prompt("The kind of the animal: ");

// animal.speak();



// EXERCISE_06
// 2.	Write a JavaScript program to display the reading status of some book. The object should have the next properties:
// •	title
// •	author 
// •	readingStatus (true/false)
// and a method (getInfo()) that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// Bonus: enter the values with prompt()

// var book =
// {
//     title: "",
//     author: "",
//     readingStatus: "",
//     getInfo()
//     {
//         if (this.readingStatus === "Yes") 
//         {
//             return alert("Already read " + book.title + " by " + book.author + ". You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.");    
//         }
//         else if (this.readingStatus === "No") 
//         {
//             return alert("Happy reading.");    
//         }        
//         else
//         {
//             return alert("Invalid inputs.");    
//         }
//     }
// }

// book.title = prompt("Enter the title of the book: ");
// book.author = prompt("Enter the author of the book: ");
// book.readingStatus = prompt("Reading status of the book(Yes/No): ");

// book.getInfo();



// EXERCISE_07
// 1.	Create object Student with this properties
// •	firstName
// •	lastName 
// •	points
// •	subject 
// •	didIPass() returns true/false (method student need to have more than 51points to pass)

// var student =
// {

//     firstName: "",
//     lastName: "",    
//     subject: "",
//     points: null,
//     didIPass()
//     {
//         if (this.points >= 51 && this.points <= 100) 
//         {
//             return alert("You PASS!");
//         }
//         else if (this.points >= 0 && this.points <= 50)
//         {
//             return alert("You FAILED!");
//         }
//         else
//         {
//             return alert("Invalid inputs!");
//         }
//     }

// }

// student.firstName = prompt("Enter your name: ");
// student.lastName = prompt("Enter your lastname: ");
// student.subject = prompt("Enter your subject: ");
// student.points = parseInt(prompt("Enter your points: "));

// student.didIPass();



// EXERCISE_08
// function Student(id, name, age) {
// 	this.id = id;
// 	this.name = name;
// 	this.age = age;

// 	this.alertInfo = function() {
// 		alert(this.name + ' ' + this.age + ' ' + this.id);
// 	}
// }

// var student1 = new Student(1, 'Sandra', 28);
// //student1.alertInfo();

// var student2 = new Student(2, 'Emilija', 28);
// //student2.alertInfo();