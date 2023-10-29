const array = [3, 7, 97,14,8,23,2021,2025];
//! metodsuz hell
let reverseArray=[];
for (let index = array.length-1; index >=0; index--) {
     reverseArray=[...reverseArray, array[index]];  
}
//! metodla hell
let tersArray = [...array].reverse();
let tersArray2 = array.slice().reverse();
console.log("Metodsuz hell: ", reverseArray);
console.log("Metodla hell(numune1): ", tersArray);
console.log("Metodla hell(numune2) ", tersArray2);