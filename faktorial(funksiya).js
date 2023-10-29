function faktorial(a)
{
    if(a===0)
    {
        return 0;
    }
    else if(a===1)
    {
        return 1;
    }
    else if(a>1)
    {
        const f=a*(a-1);
        faktorial();
        a--;
        return f;
}
}
console.log(faktorial(3));