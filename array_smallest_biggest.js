const arr1 = [1, 2, 5, 3, 4, 5, 0];
let min = arr1[0];
let max = arr1[0];
arr1.forEach(item => {
     console.log("i", i);
     if (item < min) {
          console.log("min", item);
          min = item;
     }
     if (item > max) {
          console.log("max", item);
          max = item;
     }


});
const arr2 = [];
arr2[0] = min;
arr2[1] = max;
console.log(arr2);

