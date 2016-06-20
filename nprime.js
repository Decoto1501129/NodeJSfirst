var i=parseInt(process.argv[2],10);
var two=2;
var three=3;
var nn=4;
var prime=[];
var j=2;
prime[0]=two;
prime[1]=three;
while(j < i) 
{
	//console.log(sum);
	//console.log(process.argv[j]);
	for (var a=0;a<j;a++)
	{
	    if (nn%prime[a]==0)
	    {
	    nn++;
	    break;
	    }
	}
	if (a>=j)
	{
	    prime[j]=nn;
	    j++;
	    nn++;
	}
}
console.log(prime[j-1]);