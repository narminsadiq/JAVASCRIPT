const array = [3, 7, 97,14,8,23,2021,2025];
let  newarray=[];
//! metodsuz hell
for(let i=0;i<array.length/2; i++)
{
     
     newarray=[...newarray, array[i]];    
}
//! metodla hell
let newarray2 =array.slice(0, array.length / 2);
console.log("Metodsuz hell: ", newarray);
console.log("Metodla hell: ", newarray2);