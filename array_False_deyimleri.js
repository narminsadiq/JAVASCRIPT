const arr = [5, "yazi", 12, true, false, 25, "salam", [],"", null];
//! metodsuz hell
let arr1=[];
for(let i=0; i<arr.length; i++)
     {
          if (!!arr[i])
          {
               arr1=[...arr1,item];

          }

     }
//! metodla hell
const newarr = arr.filter(item => {
     if (!!item) {
          return item;
     }
});
console.log("Metodsuz hell: ", arr1);
console.log("Metodla hell: ", newarr);