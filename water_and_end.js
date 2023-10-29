function yoxla(insan,su)
{
    const hecmGun=insan*3;
    const suIsrafi=parseInt(su/hecmGun)
    if(suIsrafi<=1)
    {
        console.log("sizin su ehtiyatiniz 1 gune bitecek. Su almaq lazimdir");

    }
    else if(suIsrafi<14)
    {
        console.log("sizin su ehtiyatiniz "+ suIsrafi + " gune bitecek. Su almaq lazimdir");

    }
    else if(suIsrafi>=14)
    {
        console.log("sizin su ehtiyatiniz "+ suIsrafi + " gune bitecek. Su almaq lazim deyil");

    }
}
yoxla(4,480);
yoxla(4,48);
