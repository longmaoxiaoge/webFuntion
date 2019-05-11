define(["At","text!myserve.html","jquery"],function(At,text,$){
	function initView(ele){
	let data = {
		maizuo: "卖座卡",
		hongbao:"组合红包",
		yuer:"余额",
		shezhi:"设置"
	}
	let myHtml = At.render(text,data);
	ele.html(myHtml);
	}
	return {
		initView:initView
	}
})