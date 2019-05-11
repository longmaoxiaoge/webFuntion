require.config({
	baseUrl: "./libs",	//默认基于当前目录,如果无需更改,则省略baseUrl
	paths: {	//引入整个项目所需的模块,以便后面的模块直接引用
		At: "artTemplate",
		domReady: "domReady",
		text: "text",
		jquery: "jquery",
		home: "../modules/home"
	}
})

require(["At","domReady","text","jquery","home"],function(home){
	
})