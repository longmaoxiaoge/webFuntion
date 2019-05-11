define(["At","text!login.html","jquery"],function(At,text,$){
	
	function initView(ele){
		ele.html(text);
		}	
		return {
			initView:initView
		}
	
	
	})