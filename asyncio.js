var fs=require('fs')
var lines=undefined

function readasync(callback){
	fs.readFile(process.argv[2],function doneReading(err,fileContents){
				if (err== null)
				{
				//console.log(fileContents)
				lines=fileContents.toString().split('\n').length-1
				callback()
				}
				else
					console.log(err)
					
			}
			)
			
}

function logit()
{
	console.log(lines)
}

readasync(logit)
