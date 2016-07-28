var fs=require('fs');
var lines=undefined;
var d1000=[];
var d50=[];
var max=0;
var product=0;

function readasync(callback){
	fs.readFile(process.argv[2],
		function doneReading(err,fileContents)
		{
			if (err== null)
			{
				//console.log(fileContents);
				lines=fileContents.toString().split('\n');
				lines.forEach(split50);
				d1000.forEach(getProduct);
				callback();
			}
			else
				console.log(err);
				
		}
		)
			
}

function getProduct(element,index,array)
{
	if (index<487)
	{
		product=array[index]*
				array[index+1]*
				array[index+2]*
				array[index+3]*
				array[index+4]*
				array[index+5]*
				array[index+6]*
				array[index+7]*
				array[index+8]*
				array[index+9]*
				array[index+10]*
				array[index+11]*
				array[index+12];
	}
	if (product>max)
	{
		max=product;
	}
}

function split50(element,index,array)
{
d50=element.toString().split("");
d50.forEach(convert);
d1000=d1000.concat(d50);
}

function convert(element,index,array)
{
	array[index]=parseInt(element);
}


function logit()
{
	console.log(max);
}

readasync(logit)