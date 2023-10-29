const eded=
{
    a:9,
    b:7,
    c:12,
    d:5
}
let cem=0;
for (const key in eded) {
    cem+=eded[key];
}
console.log(cem);
