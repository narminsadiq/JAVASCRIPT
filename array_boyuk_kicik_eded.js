const array = [3, 7, 97,14,8,23,2021,2025];
//! metodsuz hell
let max=array[0];
let min=array[0];
array.forEach(item=>{
     if (item < min) {
          min = item;
     }
     if (item > max) {
          max = item;
     } 
});
//! metodla hell
    let max1 = Math.max(...array);
    let min1 = Math.min(...array);
    console.log("Metodsuz hell: en boyuk element: "+max+ " en kicik element: "+ min);
    console.log("Metodla hell: en boyuk element: "+max1+ " en kicik element: "+ min1);