function getir(reng)
{
    if(reng.ag<=reng.qara && reng.ag<=reng.sari)
    {
        return reng.ag;
    }
    else if(reng.qara<=reng.ag && reng.qara<=reng.sari)
    {
        return reng.qara;
    }
    else
    {
        return reng.sari;
    }
}
console.log(getir({ag:12,qara:23,sari:36}));
console.log(getir({ag:12,qara:3,sari:25}));
console.log(getir({ag:23,qara:23,sari:36}));
console.log(getir({ag:36,qara:36,sari:36}));