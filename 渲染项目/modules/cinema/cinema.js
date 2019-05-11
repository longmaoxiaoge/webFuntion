require.config({
	paths: {
		loadData: "../modules/common/loadData",
		cinemanavtop: "../modules/cinema/cinemanavtop/cinemanavtop",
		tabs: "../modules/films/tabs/tabs",
		cinemanavtion: "../modules/cinema/cinemanavtion/cinemanavtion",
		cinemacount: "../modules/cinema/cinemacount/cinemacount",
		loadData: "../modules/common/loadData",
		city_1: "../modules/cinema/cinemanavtion/city_1/city_1",
		dingpiao: "../modules/cinema/cinemanavtion/dingpiao/dingpiao",
		TIME: "../modules/cinema/cinemanavtion/TIME/TIME",
		city: "../modules/city/city",
		sousuo:"../modules/sousuo/sousuo",
	}
})
define(["At", "text!cinema.html", "jquery",
	"cinemanavtop",
	"cinemanavtion",
	"cinemacount",
	"loadData",
	"city_1",
	"dingpiao",
	"TIME",
	"city",
	"sousuo"
], function(At, text, $, cinemanavtop, cinemanavtion, cinemacount, loadData, city_1, dingpiao, TIME, city,sousuo) {

	function initView() {
		let data = {
			title: "影院"
		}
		let myHtml = At.render(text, data);
		$("#mainContent").html(myHtml);
		//渲染影院头部部分
		cinemanavtop.initView($("#cinemanavtop"));
		//渲染影院地址导航部分
		cinemanavtion.initView($("#cinemanavtion"));
		//渲染影院地址显示部分
		cinemacount.initView($("#cinemacount"));
		// 获取地址导航头部搜索点击		
			$(".top span:nth-of-type(3)").click(function(){
				sousuo.initView($("#mainContent"));
				//获取取消点击
				$(".sousuo_1>span:nth-of-type(3)").click(function(){
					initView();
				})
			})
		
		// 获取地址导航头部点击		
		$(".top span:nth-of-type(1)").click(function() {
			// 将cityshu数据渲染成主面板
			city.initView($("#mainContent"));
			//获取city退出点击
			$(".citytop>span:nth-child(1)").click(function() {
				initView();
			})
			//获取热门城市点击			
			$(".GPSRM>span").click(function() {
				// 获取点击的文本	
				let rmcs = $(this).html();
				// 重新渲染样式
				initView();
				//将对应的地址更改
				$(".lco").html("" + rmcs + "^");
				//将对应的地址更改
				$(".top>span").eq(0).html("" + rmcs + "^");
			})
			$(".Acity_a>p").click(function() {
				// 获取点击的文本	
				let City = $(this).html();
				// 重新渲染样式
				initView();
				//将对应的地址更改
				$(".lco").html("" + City + "^");
				//将对应的地址更改
				$(".top>span").eq(0).html("" + City + "^");
			})
		})
		// 获取元素点击事件
		$(".loction>div").click(function() {
			// 设置默认事件
			$(".loction").contents().css({
				color: "black"
			})
			// 获取当前下标
			let index = $(this).index();
			// 判断对应下标
			switch (index) {
				case 0: //为零时 让全城改变样式
					$(".lco").html("全城 ˇ")
					$(".lco").css({
						color: "red"
					})
					// 渲染city_1的数据
					city_1.initView($(".daohang_1"));
					// 获取city_1数据点击
					$(".city_1>span").click(function() {
						// 拿到点击文本
						let c = $(this).html();
						// 更改样式
						$(".lco").html("" + c + " ^");
						// 隐藏蒙版
						$("#menban_1").hide();
						$(".lco").css({
							color: "black"
						})
					})
					break;
				case 1: //为1时 让APP订票改变样式
					$(".ser").html("APP订票 ˇ")
					$(".ser").css({
						color: "red"
					})
					// 渲染dingpiao的数据
					dingpiao.initView($(".daohang_1"));
					// 获取dingpiao数据点击
					$("#menban_2>p").click(function() {
						// 拿到点击文本
						let d = $(this).html();
						// 更改样式
						$(".ser").html("" + d + " ^");
						// 隐藏蒙版
						$("#menban_2").hide();
						$(".ser").css({
							color: "black"
						})
					})
					break;
				case 2: //为2时 让最近去过改变样式
					$(".Time").html("最近去过 ˇ")
					$(".Time").css({
						color: "red"
					})
					// 渲染TIME的数据
					TIME.initView($(".daohang_1"));
					// 获取TIME数据点击
					$("#menban_3>p").click(function() {
						// 拿到点击文本
						let r = $(this).html();
						// 更改样式
						$(".Time").html("" + r + " ^");
						// 隐藏蒙版
						$("#menban_3").hide();
						$(".Time").css({
							color: "black"
						})
					})
					break;
			}
		})
	}
	return {
		initView: initView
	}
})
