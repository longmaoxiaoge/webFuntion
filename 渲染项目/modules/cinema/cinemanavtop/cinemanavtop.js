

define(["At","text!cinemanavtop.html","jquery"],function(At,text,$){

	
	// 以对象的形式返回函数
	function initView(ele){
		
			let data = {
				name:"深圳",
			title: "影院"
			
		}
		
		let myHtml = At.render(text, data);
		ele.html(myHtml);
	}
	

	return {
		initView:initView
		
	}
	
})