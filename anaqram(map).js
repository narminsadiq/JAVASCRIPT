function anaqram(array) {
     let map = new Map();
   
     for(let word of array) {
       // sozleri herflere ayirib birlesdiren funksiya
       let sorted = word.toLowerCase().split('').sort().join(''); 
       map.set(sorted, word);
     }
   
     return Array.from(map.values());
   }
   
   let arr = ["aks", "alim", "acliq", "ask", "ilam", "qacli"];
   
  console.log (anaqram(arr) );