define(["At","text!city_1.html","jquery"],function(At,text,$){
	       
		   // 以对象的形式返回函数
	function initView(ele){
		ele.html(text);
		}	
		return {
			initView:initView
		}
	
})