// circle area =  π x r2 

let arguments = process.argv.slice(2);

function calculateCircleArea(radius) {
  let pi=3;
  let area = pi * Math.pow(radius, 2);
  return area;
}
let radius=5;
let area = calculateCircleArea(radius);
console.log(`The area of the circle with radius", ${radius}, "is:", ${parseFloat(area).toFixed(2)}`);

calculateCircleArea(parseFloat(arguments[0]));