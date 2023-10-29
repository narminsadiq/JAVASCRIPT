function plus(a)
{
    return function newPlus(b)
    {
        return a+b;
    }
}
const cavab=plus(10);
console.log(cavab(7));