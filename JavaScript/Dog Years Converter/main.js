/* Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog? Here’s how you convert your age from “human years” to “dog years”:

- The first two years of a dog’s life count as 10.5 dog years each.
- Each year following equates to 4 dog years
*/


let myAge = 1;
/* Setting a variable with my age. I've changed that to "let" instead of "const", so i can work with my "if/else" fix */

let earlyYears = 2;
/* Early years of a dog */

earlyYears *= 10.5;

let laterYears = myAge - 2;
/* Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.*/

laterYears *= 4;
/* Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. */

myAgeInDogYears = laterYears + earlyYears;

const myName = "Dimi".toLowerCase();
/* This was the original code that I wrote initially according to the instructions: 
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`); */

if (myAge < 2) {
  myAge *= 10.5;
  console.log(`My age in dog years is ${myAge}`);
} else {
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
}