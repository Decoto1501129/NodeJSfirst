var i=process.argv.length;
var sum = 0;
for(var j = 2; j < i; j++) {
	//console.log(sum);
	//console.log(process.argv[j]);
	sum = sum + Number(process.argv[j]);
}
console.log(sum);