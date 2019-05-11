define(["At","text!city.html","jquery","loadData"],function(At,text,$,loadData){
	
		function initView(ele){
		ele.html(text);
		}	
		return {
			initView:initView
		}
})