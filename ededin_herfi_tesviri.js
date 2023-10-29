let eded = 43;
let teklik =eded%10;
let onluq = eded-teklik;

if (eded>=10 && eded<=99) 
{
    {
     if(teklik===1)
     {
        teklik="bir";
     }
     else if (teklik===2)
     { 
        teklik="iki";
     }
     else if (teklik===3) 
     {
        teklik="uc";
     }
     else if (teklik===4)
     {
        teklik="dord";
     }
     else if (teklik===5)
     {
        teklik="bes";
     }
     else if (teklik===6)
     {
        teklik="alti";
     }
     else if (teklik===7)
     {
        teklik="yeddi";
     }
     else if (teklik===8)
     {
        teklik="sekkiz";
     }
     else if (teklik===9)
     {
        teklik="doqquz";
     }
    }
    {
     if(onluq===10)
     {
        onluq="on";
     }
     else if(onluq===20)
     {
        onluq="iyirmi"; 
     }
     else if(onluq===30)
     {
        onluq="otuz"; 
     }
     else if(onluq===40)
     {
        onluq="qirx";
     }
     else if(onluq===50)
     {
        onluq="elli"; 
     }
     else if(onluq===60)
     {
        onluq="altmis"; 
     }
     else if(onluq===70)
     {
        onluq="yetmis"; 
     }
     else if(onluq===80)
     {
        onluq="seksen";
     }
     else if(onluq===90)
     {
        onluq="doxsan";
     }
    }
console.log( onluq + " "+teklik);
}
else{
    console.log(" verimis eded iki reqemli deyil");
}