define(["At","text!scrollAd.html","jquery","loadData"], function(At,text,$,loadData){
	function initView(){
		let promise = loadData.getData("https://www.easy-mock.com/mock/5ba06ec82ee5a7654dc13dd7/example/banner");
		promise.then(function(res){
			let myHtml = At.render(text, res);
			$("#scrollAd").html(myHtml);
		})
	}
	return {
		initView: initView
	}
})