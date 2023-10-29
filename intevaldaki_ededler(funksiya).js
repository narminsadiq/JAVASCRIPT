function getir(a,b)
{
    if(a<b-1)
    {
        console.log(a+1);
        a++;
        getir(a,b);
    }    
}        
console.log(getir(2,15));