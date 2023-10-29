const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);
const fullStack = [
     ['HTML', 'CSS', 'JS', 'React'],
     ['Node', 'Express', 'MongoDB']
   ]
   const [frontEnd, backEnd] = fullStack;
   console.log(frontEnd);
   console.log(backEnd);
   const fullStack2 = [
     ['HTML', 'CSS', 'JS', 'React'],
     ['Node', 'Express', 'MongoDB']
   ]
   
   for(const [first, second, third] of fullStack2) {
   console.log(first, second, third)
   }
   const names = [undefined, 'Brook', 'David'];
   let [
     firstPerson = 'Asabeneh',
     secondPerson,
     thirdPerson,
     fourthPerson = 'John'
   ] = names;
   console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   let [num1, num2, num3, ...rest] = nums
   
   console.log(num1, num2, num3)
   console.log(rest)
   const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}
const rectangle = {
     width: 20,
     height: 10,
     area: 200
   }
   let { width, height, area, perimeter } = rectangle
   
   console.log(width, height, area, perimeter)
   const rectangle2 = {
     width: 20,
     height: 10,
     area: 200
   }
   let { width2, height2, area2, perimeter2 = 60 } = rectangle2
   console.log(width2, height2, area2, perimeter2)
   // Without destructuring
const rect = {
     width: 20,
     height: 10
   }
   const calculatePerimeter = rectangle => {
     return 2 * (rectangle.width + rectangle.height)
   }
   
   console.log(calculatePerimeter(rect)) // 60
