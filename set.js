let set = new Set();

let nermin = { name: "Nermin",surname:"Sadiqli" };
let roya = { name: "Roya",surname:"Sultanova" };
let aslan = { name: "Aslan",surname:"Aslanzade" };

// eyni olanlar var
set.add(nermin);
set.add(roya);
set.add(nermin);
set.add(aslan);
set.add(aslan);

// setde tekrarlanma olmur
console.log(set.size ); // 3

for(let user of set) {
  console.log(user.name +" "+ user.surname); 
}