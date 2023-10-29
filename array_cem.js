const array = [3, 7, 97,14,8,23,2021,2025];
//! metodsuz hell
let sum=0;
array.forEach(item=>
{
     sum+=item;
});
//! metodla hell
    let cem = array.reduce((accumulator, currentValue) => 
    accumulator + currentValue, 0);
console.log("Metodsuz hell: ", sum);
console.log("Metodla hell: ", cem);