let eded2=2558;
if(eded2>=0 && eded2<=1000)
{
    if(eded2>=0 && eded2<=9)
    {
        console.log("verilmis eded BIR reqemlidir");
    }
   else if(eded2>=10 && eded2<=99)
   {
       console.log("verilmis eded IKI  reqemlidir");
   }
   else if(eded2>=100 && eded2<=999)
   {
       console.log("verilmis eded UC reqemlidir");
   }
   else if(eded2===1000)
    {
        console.log("verilmis eded dord reqemlidir");
    }
}
else{
    console.log("verilmis eded verilmis werte uygun deyil");
}