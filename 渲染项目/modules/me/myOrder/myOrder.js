define(["At","text!myOrder.html","jquery"],function(At,text,$){
	function initView(ele){
		
		let data = {
			title1: "电影订单",
			title2:"商品订单"
		}
		let myHtml = At.render(text,data);
		ele.html(myHtml);
		
	}
	return {
		initView:initView
	}
})
