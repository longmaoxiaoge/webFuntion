define(["At","text!filmsContent.html","jquery","loadData"], function(At,text,$,loadData){
	function initView(){
		let promise = loadData.getData("https://www.easy-mock.com/mock/5ba06ec82ee5a7654dc13dd7/example/nowPlaying1");
		promise.then(function(res){
			
			let myHtml = At.render(text, res.data);
			$("#filmsContent").html(myHtml);
		})
	}
	return {
		initView: initView
	}
})