define(["At","text!cinemanavtion.html","jquery"],function(At,text,$){
	 function initView(ele){
		   let data = {
		  	location:"全城",
		  	serve: "APP订票",
		  	time:"最近去过"
		  }		  
		    // 获取数据
		  let myHtml = At.render(text, data);
		 //渲染数据
		 ele.html(myHtml);
		 
		 // 以对象的形式返回函数
	 }
	 return {
		 initView:initView
	 }
	
	})