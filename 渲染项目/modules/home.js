require.config({
	paths: {	//引入home页面所需的所有模块
		tabbar: "../modules/tabbar/tabbar",	//底部选项卡
		films: "../modules/films/films",	//电影
		cinema: "../modules/cinema/cinema",	//影院
		discount: "../modules/discount/discount",	//特惠
		me: "../modules/me/me",		//我的
	}
})

require(["tabbar"],function(tabbar){
	tabbar.initView();	//显示tabbar
})