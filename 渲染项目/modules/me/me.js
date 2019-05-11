require.config({
	paths: {
		loadData: "../modules/common/loadData",
		my:"../modules/me/my/my",
		tabs: "../modules/films/tabs/tabs",
		myOrder:"../modules/me/myOrder/myOrder",
		myserve:"../modules/me/myserve/myserve",
		login:"../modules/me/login/login",
	}
})





define(["At","text!me.html","jquery",
"my",
"myOrder",
"myserve",
"login"],function(At,text,$,my,myOrder,myserve,login){
	function initView(){
		let data = {
			title: "我的"
		}
		let myHtml = At.render(text,data);
		$("#mainContent").html(myHtml);
		my.initView($("#my"));
		myOrder.initView($("#myOrder"));
		myserve.initView($("#myserve"));
		
		
		$(".mytop").children().click(function(){
			
			login.initView($(".login_1"));
			
			$(".login_A>span").click(function(){
				$(".login_1").hide();
			})
			$(".mytop").children().click(function(){
				$(".login_1").show();
			})
			
		})
		
		
		
	}
	return {
		initView: initView
	}
})