define(["At","text!filmsContent.html","jquery","loadData"], function(At,text,$,loadData){
	function initView(){
		let promise = loadData.getData("https://www.easy-mock.com/mock/5cd2a7a258a77829095bd1b5/example/zhengzaishangying");
		promise.then(function(res){
			let myHtml = At.render(text, res.data);
			$("#filmsContent").html(myHtml);
		})
	}
	return {
		initView: initView
	}
})