/* Georgian College
24F Client-Side JavaScript - 200
Week 5 - Lab
Student: Geraldo Beiro
Student ID: 200587023
*/


//CHALLENGE 1

//down below I am creating the one line function to convert fahrenheit into celsius..
const getCelsius = (fahrenheit) => celsius = (fahrenheit-32)*5/9;

console.log(`The conversion into celsius is: ${getCelsius(100)} \xB0C`);


//CHALLENGE 2

//Now I will create the array with a range of numbers
let myArray = [
    187, 237, 125, 57, 233, 38, 179

];

//This is the function for picking the min and max value of my array
const minMax = myArray => ({
    min: Math.min(...myArray),
    max: Math.max(...myArray)
});

// also I am assigning the two values to a const to better display the results in the next line of code (result.min and result.max)
const result = minMax(myArray);

// now I am printing the values using the function.
console.log('The min and max values in the array are: min= '+result.min+' and max= '+result.max);


// CHALLENGE 3
// Here I just created a function taking two parameters length and width and multiplying them, returning the total area of the square.
(function(length, width) {
    const area = length * width;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
})(3, 5);



