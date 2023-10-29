const  massiv = [5,12,3,8,1,12,25];
//! metodsuz hell 
for (let i = 0; i < massiv.length; i++) {
    for (let j = i + 1; j < massiv.length; j++) {
        if (massiv[i] < massiv[j]) {
            let temp = massiv[i];
            massiv[i] = massiv[j];
            massiv[j] = temp;
        }
    }
}

// Nəticəni çap et
console.log("boyukden  kiciye siralama:", massiv);
for (let i = 0; i < massiv.length; i++) {
    for (let j = i + 1; j < massiv.length; j++) {
        if (massiv[i] > massiv[j]) {
            let temp = massiv[i];
            massiv[i] = massiv[j];
            massiv[j] = temp;
        }
    }
}
console.log("kicikden boyuye siralama:", massiv);
//! metodla hell
let artanSirali = massiv.slice().sort((a, b) => a - b);
let azalanSirali = massiv.slice().sort((a, b) => b - a);
console.log("Metodla hell:Artan sira",artanSirali );
console.log("Metodla hell: Azalan sira",azalanSirali );