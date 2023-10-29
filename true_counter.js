const arr=[true,false,false,true,true,true];
let count=0;
arr.forEach(item=>{
     if(item==true)
     {
          count++;


     }
     else if(item==null)
     {
          console.log(0);

     }
})
console.log(count);