let n=5;
let text=""

for( let i=1; i<=5; i++ )
{
        text+="X";
        console.log(text);
}

for( let i=n; i>=1; i-- )
{
        let text="";
        for(let j=1; j<=i; j++)
        {
                text+="X";      
        }
        console.log(text);

}