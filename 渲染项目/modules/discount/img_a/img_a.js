define(["At","text!img_a.html","jquery"],function(At,text,$){
	
function initView(ele){
		ele.html(text);
		}	
		return {
			initView:initView
		}
	
})