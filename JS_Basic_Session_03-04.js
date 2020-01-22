//Exercise_01
//Write a program in JavaScript to read n number of values in an array and display it in reverse order.

// var array = [0, 1, 2, 3, 4, 5];
// var reverseArray = array.reverse();
// alert(array.length);
// alert(reverseArray);


//Exercise_02
//Write a JavaScript program to sort the items of an array.

// var arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];
// function sortNumber(a, b) {
//     return a - b;
// }
// var sortArr1 = arr1.sort(sortNumber);
// alert(sortArr1);


//Exercise_03
//Write a JavaScript program to check whether a matrix is a diagonal matrix or not.
//Hint: Matrix == 2 dimensional array(array of arrays)

// function isDiagonalMatrix(userMatrix) 
// {
//     for (var i = 0; i < userMatrix.length; i++) 
//     {
//         for (var j = 0; j < userMatrix.length; j++)
//         {
//             if (i !== j && userMatrix[i][j] !== 0) 
//             {
//                 return false;
//             }
//         } 
//     }
//     return true;
// }

// alert(isDiagonalMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
// alert(isDiagonalMatrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));



//Exercise_04
//Write a JavaScript program to remove duplicate items from an array.

// var array = [0, 1, 1, 2, 2, 3, 3, 4];
// var arrayNew = [];

// function removeDuplicate(array) {
//     for (var i = 0; i <= array.length; i++) 
//     {
//         if (arrayNew.indexOf(array[i]) === -1) 
//         {
//             arrayNew.push(array[i]);
//         }
//     }
// }

// removeDuplicate(array);
// arrayNew.sort();
// alert(arrayNew);



//Exercise_05
//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.

// var num = "025468";

// var arr = Array.from(String(num), Number);

// var arrNew = [];
// var arrNew1 = [];

// for (var i = 0; i < arr.length; i++) 
// {    
//     if (arr[i]%2 == 0 && arr[i+1]%2 == 0) 
//     {             
//         arrNew.push(arr[i] + "-");
//     } 
//     else
//     {
//         arrNew.push(arr[i]);
//     }
// }

// arrNew1 = arrNew.join("");
// alert(arrNew1);



//Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops.
//Sample array : var a = [[1, 2], [8, 11], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//Sample Output :(*in one column is OK, many columns are not requirement)


// var array = [[1, 2], [8, 11], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// var arrayNew = [];

// for (let i = 0; i < array.length; i++) 
// {
//     for (let j = 0; j < array[i].length; j++) 
//     {
//         arrayNew.push(array[i][j]);
//     }    
// }

// alert(arrayNew);