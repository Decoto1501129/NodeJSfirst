var i=parseInt(process.argv[2],10);
var divider=2;
while(divider <= i) 
{
	if (i%divider == 0)
	{
		i=i/divider;
		console.log("largest divider so far:"+divider)
	}
	else
	{
		divider++;
		//console.log("i and divder:"+i+" "+divider)
	}
		
}