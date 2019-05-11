define(["At","text!my.html","jquery"],function(At,text,$){
	function initView(ele){
			let data = {
			title: "立即登录",
			src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557465855337&di=20a4179ffe3f5d96e4a08d5def560f69&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F07%2F85%2F23%2F59310eb476b9a.png"
		}
		  
		let myHtml = At.render(text,data);
		ele.html(myHtml);
		
	}
	
	return {
		initView:initView
	}
	
	})
	
