function FreeShipping(a,b,c)
{
    if(a+b+c>50)
    {
    return true;
    }
    else
    {
        return false;
    }
}
console.log(FreeShipping(14,34,23));
console.log(FreeShipping(4,25,7));
console.log(FreeShipping(25,17,23));
