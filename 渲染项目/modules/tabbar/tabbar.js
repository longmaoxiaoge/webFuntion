define(["At","text!tabbar.html","jquery","films","cinema","discount","me"],function(At,text,$,films,cinema,discount,me){
	let data = {
		list: [
			{title: "电影"},
			{title: "影院"},
			{title: "特惠"},
			{title: "我的"}
		]
	}
	// 将数据渲染到tabbar.html模板中
	let myHtml = At.render(text,data);
	
	// 将tabbar添加到home里面的容器中
	$("#tabbar").html(myHtml);
	
	// 初始化激活0下标
	$(".tabbar li").eq(0).addClass("active");
	// 初始化页面
	films.initView();
	
	// 将tabbar操作的内容封装成函数,以便调用
	function initView(){
		// 绑定点击事件
		$(".tabbar li").click(function(){
			// 重置样式
			$(".tabbar li").each(function(i,ele){
				ele.className = "";
			})
			// 激活样式
			$(this).addClass("active");
			// 另存下标
			let index = $(this).index();
			// 判断当前下标,对应显示内容
			switch(index){
				case 0: 
					films.initView();	//初始化电影页面(调用films.js return的函数)
					break;
				case 1: 
					cinema.initView();	//初始化影院页面(调用cinema.js return的函数)
					break;
				case 2: 
					discount.initView();	//初始化特惠页面(调用discount.js return的函数)
					break;
				case 3: 
					me.initView();	//初始化我的页面(调用me.js return的函数)
					break;
			}
		})
	}
	
	return {
		initView: initView
	}
})