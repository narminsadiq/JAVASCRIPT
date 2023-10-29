const array = [3, 7, 97,14,8,23,2021,2025];
//! metodsuz hell
tekArray=[];
cutArray=[];
array.forEach(item=>{
     if (item%2==0) {
          cutArray=[...cutArray,item];
          
     }
     else
     {
          tekArray=[...tekArray,item];
     }
})
//! metodla hell
    let tekler = array.filter(element => element % 2 !== 0);
    let cutler = array.filter(element => element % 2 === 0);
    console.log("Metodsuz hell:CUTLER ", cutArray);
    console.log("Metodsuz hell:TEKLER ", tekArray);
    console.log("Metodla hell:CUTLER", cutler);
    console.log("Metodla hell: TEKLER", tekler);