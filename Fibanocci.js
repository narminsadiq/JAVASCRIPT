function fib(n)
{
    let a=1;
    let b=1;
    for(let i=3; i<=n; i++)
    {
        let yeni=a+b;
        a=b;
        b=yeni;
    }
    return b;
}
console.log(fib(6));
