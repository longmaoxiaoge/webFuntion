define(["jquery"], function($){
	let getData = function(url){
		let promise = new Promise(function(resolve,reject){
			$.get(url,res=>{
				resolve(res);
			})
		})
		return promise;
	}
	return {
		getData: getData
	}
})