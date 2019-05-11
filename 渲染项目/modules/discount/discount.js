require.config({
	paths: {
		loadData: "../modules/common/loadData",		
		tabs: "../modules/films/tabs/tabs",		
		loadData: "../modules/common/loadData",
		img_a:"../modules/discount/img_a/img_a",
		
         
			
	}
})


define(["At","text!discount.html","jquery","img_a"],function(At,text,$,img_a){
	function initView(){
	
		
		img_a.initView($("#mainContent"));
		
	}
	return {
		initView: initView
	}
})