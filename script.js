let output = document.getElementById("output");

let array = [1,2,3,4];

function arrayManipulation(array){
	return new Promise((resolve,reject) =>{
		setTimeout(()=>{
			resolve(array);
		},3000)
	})
	.then((array)=>{
		return new Promise((resolve,reject)=>{
		let solution = array.filter((a) => a%2==0)
		setTimeout(()=>{
				output.innerHTML = JSON.stringify(solution);
			resolve(solution);
		},1000);
	})
	})
	.then((solution) =>{
		let addition = solution.map((a) => a*2);
		setTimeout(()=>{
			output.innerHTML = JSON.stringify(addition);
		},2000)
	})
	
}
 arrayManipulation(array);
