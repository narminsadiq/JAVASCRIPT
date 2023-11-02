
function generation(a, b) 
{
    if (a ===0 && b ==="m")
    {
        return "Men";
    }
    else if (a ===1 && b =="m")
    {
        return "Ogul";
    }
    else if (a ===2 && b ==="m")
    {
        return "Oglan Nevesi";
    }
    else if (a ===3 && b ==="m")
    {
        return "Ogulun nevesi";
    }
    else if (a ===-1 && b==="m")
    {
        return "Ata";
    }
    else if (a ===-2 && b ==="m")
    {
        return "Baba";
    }
    else if (a ===-3 && b ==="m")
    {
        return "Atanin babasi";
    }
    if (a ===0 && b ==="f")
    {
        return "Men";
    }
    else if (a ===1 && b =="f")
    {
        return "Qiz";
    }
    else if (a ===2 && b ==="f")
    {
        return "Qiz Nevesi";
    }
    else if (a ===3 && b ==="f")
    {
        return " Qizin nevesi";
    }
    else if (a ===-1 && b==="f")
    {
        return "Ana";
    }
    else if (a ===-2 && b ==="f")
    {
        return "Nene";
    }
    else if (a ===-3 && b ==="f")
    {
        return "Ananin nenesi";
    }

else
    {
        return "bele bir neslin uzvu yoxdur";
    }
}
console.log(generation(2, "m"));