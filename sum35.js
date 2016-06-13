var i=process.argv[2];
var sum = 0;
for(var j = 1; j <= i; j++) {
	//console.log(sum);
	//console.log(process.argv[j]);
	if ((j%3 == 0)| (j%5==0))
	sum = sum + j;
}
console.log(sum);
var sum3=0;
var an3=0;
an3=Math.floor(i/3)*3;
an3=an3*3;
var n3=0;
n3=(an3-3)/3+1;
sum3=n3/2*(2*3+(n3-1)*3);
var sum5=0;
var an5=0;
an5=Math.floor(i/5)*5;
var n5=0;
n5=(an5-5)/5+1;
sum5=n5/2*(2*5+(n5-1)*5);
var sum15=0;
var an15=0;
an15=Math.floor(i/15)*15;
var n15=0;
n15=(an15-15)/15+1;
sum15=n15/2*(2*15+(n15-1)*15);
console.log(sum3+sum5-sum15);
