require.config({
	paths: {
		loadData: "../modules/common/loadData",
		scrollAd: "../modules/films/scrollAd/scrollAd",
		tabs: "../modules/films/tabs/tabs",
		filmsContent: "../modules/films/filmsContent/filmsContent",
		filmsContent1: "../modules/films/filmsContent1/filmsContent1"
	}
})

define(["At","text!films.html","jquery",
		"scrollAd",
		"tabs",
		"filmsContent",
		"filmsContent1"
	],function(At,text,$,scrollAd,tabs,filmsContent,filmsContent1){
	function initView(){
		let data = {
			title: "电影"
		}
		let myHtml = At.render(text,data);
		$("#mainContent").html(myHtml);
		scrollAd.initView();
		tabs.initView($("#tabs"));
		filmsContent.initView();
		
	}
	return {
		initView: initView
	}
})