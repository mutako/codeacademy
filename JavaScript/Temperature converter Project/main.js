const kelvin = 0;
//* we've set a constant variable named "kelvin" *//

const celsius = kelvin - 273;
//* we've set a constant variable named "celsious", which is 273 degrees less than "kelvin" *//

let fahrenheit = celsius * (9 / 5) + 32;
//* we've set a variable to calculate the temperature in fahrenheit from celsius *//

fahrenheit = Math.floor(fahrenheit);
//* "floor" is a Math method to round down the value to the nearest integer *//

console.log(`The temperature in Celsius is ${celsius} degrees, in Kelvin is ${kelvin} degrees and is ${fahrenheit} degrees in Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log("And for the ones that were wondering, the temperature is " + newton + " degrees on the Newtonian scale.");