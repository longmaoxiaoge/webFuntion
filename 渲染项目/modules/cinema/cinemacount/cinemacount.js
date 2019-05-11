define(["At","text!cinemacount.html","jquery","loadData"],function(At,text,$,loadData){
	function initView(ele){
		// 获取loadData模板的数据
	let promise = loadData.getData("https://www.easy-mock.com/mock/5cd2a7a258a77829095bd1b5/example/yingyuan");
	promise.then(function(res){	
		//获取ajxa数据
		let mynewHtml = At.render(text,res.data);
		//渲染数据
		ele.html(mynewHtml);	
			
	})	
	}
	// 以对象的形式返回函数
	return {
		initView:initView
	}
})