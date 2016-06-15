function palin()
{
    var k=0;
    var max=0;
    
    for (var i=999;i>900;i--)
    for (var j=999;j<900;j--)
    {
        k=i*j;        
        if(ispalin(k))
        {
            if (k>max)
                max=k;
        }
    }
    return max;
}
function ispalin(i)
{
     return i.toString() == i.toString().split("").reverse().join("");
}

console.log(palin());