define(["At","text!tabs.html","jquery","filmsContent","filmsContent1"], function(At,text,$,filmsContent,filmsContent1){
	function initView(ele){
		let data = {
			list: ["正在热映", "即将上映"]
		}
		let myHtml = At.render(text, data);	//数据渲染到页面
		ele.html(myHtml);	//将渲染后的数据添加到对应的容器(由于这个容器获取不到,所以封装成函数,在父级模板调用, 调用时将对应的元素容器传进来)
		
		$(".tabs li").eq(0).addClass("active");
		$(".tabs li").click(function(){
			// 重置样式
			$(".tabs li").each(function(i,ele){
				ele.className = "";
			})
			// 激活样式
			$(this).addClass("active");
			
			let index = $(this).index();
			switch(index){
				case 0:
					filmsContent.initView();
					break;
				case 1:
					filmsContent1.initView();
					break;
			}
		})
	}
	return {
		initView: initView
	}
})