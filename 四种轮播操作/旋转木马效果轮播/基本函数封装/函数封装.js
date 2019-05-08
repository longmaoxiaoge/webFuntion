//获取或设置最终样式函数封装
function css(obj, attr, val) {
	if(!val) { //没有第三个参数时函数实现获取

		if(window.getComputedStyle) {
			return getComputedStyle(obj)[attr];
		} else {
			return obj.currentStyle[attr];
		}
	} else {
		obj.style[attr] = val;
	}
}

//节点访问兼容性写法

function firstNode(Obj) { //获取第一个节点
	if(!obj.firstChild) {
		return false;
	}
	return obj.firstElementChild || (obj.firstChild.nodeType == 1 ? obj.firstChild : (obj.firstChild).nextSibling);
}

function lastNode(Obj) { //获取最后一个节点
	if(!obj.lastChild) {
		return false;
	}
	return obj.lastElementChild || (obj.lastChild.nodeType == 1 ? obj.lastChild : previousNode(obj.lastChild));
}

function nextNode(Obj) { //获取后一个兄弟节点
	if(!obj.nextSibling) {
		return false;
	}
	return obj.nextElementSibling || (obj.nextSibling.nodeType == 1 ? obj.nextSibling : nextNode(obj.nextSibling));
}

function previousNode(obj) { //获取前一个兄弟节点
	if(!obj.previousSibling) {
		return false;
	}
	return obj.previousElementSibling || (obj.previousSibling.nodeType == 1 ? obj.previousSibling : previousNode(obj.previousSibling));
}

//设置或获取滚动宽高或者Windows宽高兼容写法

//设置滚动高度
function setScrollY(num) {
	document.documentElement.scrollTop = document.body.scrollTop = num;
}

//获取滚动高度
function getScrollY() {
	return window.pageYOffset || document.documentElement.scrollTop;
}

//获取window宽度
function windowWidth() {
	return document.documentElement.clientWidth || window.innerWidth;
}

//获取window高度
function windowHeight() {
	return document.documentElement.clientHeight || window.innerHeight;
}

//获取鼠标位置的ev兼容写法

//   var ev= ev || window.event
//  var posX=ev.pageX 
//   var posY=ev.pageY 

//实现随机函数的封装
//获取n-m之间的随机数：
function getRandomNum(min, max) {
	return Math.random() * (max - min) + min;
}

//   缓动动画封装
function buffer(obj, json, fn) {
	clearInterval(obj.timer);

	var begin = 0,
		target = 0,
		speed = 0;
	obj.timer = setInterval(function() {
		var flag = true;

		for(var k in json) {
			//获取初始值
			if("opacity" === k) { //透明度
				begin = Math.round(parseFloat(css(obj, k)) * 100) || 100;
				target = parseInt(parseFloat(json[k]) * 100);
			} else if("scrollTop" ===k){
				begin = Math.ceil(obj.scrollTop);
				target = parseInt(json[k]);
			}else{
				 //其他情况
				begin = parseInt(css(obj, k)) || 0;
				target = parseInt(json[k]);
				console.log(begin);
			
			}

			//求出步长
			speed = (target - begin) * 0.2;

			speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);

			//动起来
			if("opacity" === k) { //透明度
				obj.style.opacity = (begin + speed) / 100

				obj.style.filter = 'alpha(opacity:' + (begin + speed) + ')'

			} else if("scrollTop" ===k){
				obj.scrollTop = begin + speed;
			}
			else if("zIndex" ===k){
				obj.style.zIndex = json[k];
			}else {
				obj.style[k] = begin + speed + "px";
			}




			if(begin != target) {
				flag = false;

			}

		}

		if(flag) {
			clearInterval(obj.timer);

			if(fn) {
				fn();
			}
		}
	}, 40)

}

//            获取元素封装

        //querySelector(Cname) 函数
function one_name(Cname) {
	return typeof Cname === "string" ? document.querySelector(Cname) : null;
}
//querySelectorAll(bq) 函数
function arr_name(bq) {
	return typeof bq === "string" ? document.querySelectorAll(bq) : null;
}