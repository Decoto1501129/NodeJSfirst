var i=parseInt(process.argv[2],10);
var sum = 2;
var next=0;
var prev=1;
var j=2;
while(j <= i) {
	next=j+prev;
	prev=j;
	j=next;
	console.log(j);
	//console.log(process.argv[j]);
	if (j%2 == 0) 
	{
		sum = sum + j;
		console.log("sum:"+sum);}
}
console.log("final even sum" +sum);
