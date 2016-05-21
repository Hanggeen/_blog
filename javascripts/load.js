function loadHome(){
	var content = document.getElementById("content");
	while(content.hasChildNodes()){
		content.removeChild(content.firstChild);
	}

	http.get("/database/home/home.json",function(res){
		if(res.status!==200){
			console.log(res.statusText);
			 if (res.status == 404)
				to404();
		}
		else{
			var json = JSON.parse(res.responseText);

			var home = document.createElement("div");
			home.setAttribute("id","home");

			var homeTop = document.createElement("div");
			homeTop.setAttribute("class","homeTop");

			var cover = document.createElement("div");
			cover.setAttribute("class","cover");

			var portrait = document.createElement("img");
			portrait.setAttribute("src","/database/home/portrait.jpg");
			portrait.setAttribute("alt","头像");

			homeTop.appendChild(cover);
			homeTop.appendChild(portrait);
			home.appendChild(homeTop);

			document.getElementById("content").appendChild(home);

			var showOrder = 1;

			json.content.forEach(function(obj,index,array){

				var personal = document.createElement("div");
				personal.setAttribute("class","personal");

				for(var key in obj){
					if(key == "h2"){
						var node = document.createElement(key);
					}
					else{
						var node = document.createElement("p");
					}

					var text = document.createTextNode(obj[key]);
					node.appendChild(text);

					personal.appendChild(node);
				}


				setTimeout(function(){
					home.appendChild(personal);
				},200*showOrder);
				showOrder++;

			});
		}
	});
}










function loadText(url){

	var content = document.getElementById("content");
	while(content.hasChildNodes()){
		content.removeChild(content.firstChild);
	}

	http.get("/database/article/"+url+"/"+url+".json",function(res){
		if(res.status!==200){
			console.log(res.statusText);
			 if (res.status == 404)
				to404();
		}
		else{
			var json = JSON.parse(res.responseText);
			var article = document.createElement("article");
			article.setAttribute("id","article");
			document.getElementById("content").appendChild(article);
			json.content.forEach(function(item,index,array){
				for(var o in item){
					var para = document.createElement(o);
					if(o =="img"){
						for(var atr in item[o]){
							para[atr]=item[o][atr];
							para[atr]="/database/article/"+url+"/"+item[o][atr];
						article.appendChild(para);
						}
					}
					else{
						var node = document.createTextNode(item[o]);
						para.appendChild(node);
						article.appendChild(para);
					}
				}
			});
		}
	});
}

function loadTextList(hashkind){
	var content = document.getElementById("content");
	while(content.hasChildNodes()){
		content.removeChild(content.firstChild);
	}

	http.get("/database/article/article.json",function(res){
		if(res.status!==200){
			console.log(res.statusText);
			 if (res.status == 404)
				to404();
		}
		else{
			var json = JSON.parse(res.responseText);
			// var kinds = ["全部","生活","技术","记录"];
			// var kindsName = ["all","life","skill","record"];
			var kind = {"all":"全部","life":"生活","skill":"技术","record":"记录"};
			// 创建一个分类的节点
			var classify = document.createElement("div");
			classify.setAttribute("id","classify");
			// for(var i = 0; i < kinds.length; i++){
			// 	var node = document.createElement("a");
			// 	node.setAttribute("href","#list/"+kindsName[i]);
			// 	var text = document.createTextNode(kinds[i]);
			// 	node.appendChild(text);
			// 	classify.appendChild(node);
			// }
			for(var item in kind){
				var node = document.createElement("a");

				node.setAttribute("href","#list/"+item);
				var text = document.createTextNode(kind[item]);
				node.appendChild(text);
				classify.appendChild(node);

			}



			var list = document.createElement("div");
			list.setAttribute("id","list");

			var content = document.getElementById("content");
			content.appendChild(list);
			list.appendChild(classify);

			var ul = document.createElement("ul");
			list.appendChild(ul);

			var showOrder = 1;

			json.content.forEach(function(item,index,array){

				if(hashkind == "all" || hashkind == item.kind){
					var li = document.createElement("li");
					var img_a = document.createElement("a");
					img_a.setAttribute("href","#list/"+item.url);
					var img = document.createElement("img");
					img.setAttribute("src","/database/article/"+item.url+"/cover.png");
					img.setAttribute("alt","栏目配图");
					img_a.appendChild(img);
					li.appendChild(img_a);

					var div = document.createElement("div");

					var p = document.createElement("p");
					var p_a = document.createElement("a");
					p_a.setAttribute("href","#list/"+item.kind);
					var p_text = document.createTextNode("分类："+kind[item.kind]);
					p_a.appendChild(p_text);
					p.appendChild(p_a);
					div.appendChild(p);

					var h3 = document.createElement("h3");
					var h3_a = document.createElement("a");
					h3_a.setAttribute("href","#list/"+item.url);
					var h3_text = document.createTextNode(item.title);
					h3_a.appendChild(h3_text);
					h3.appendChild(h3_a);
					div.appendChild(h3);

					var sub = document.createElement("sub");
					var sub_text = document.createTextNode(getLocalTime(item.date)+" | "+item.location);
					sub.appendChild(sub_text);
					div.appendChild(sub);

					li.appendChild(div);
					setTimeout(function(){
						ul.appendChild(li);
					},200*showOrder);
					showOrder++;
				}
			});
		}
	});
}


function loadAlbumList(){
	var content = document.getElementById("content");
	while(content.hasChildNodes()){
		content.removeChild(content.firstChild);
	}

	http.get("/database/album/album.json",function(res){
		if(res.status!==200){
			console.log(res.statusText);
			 if (res.status == 404)
				to404();
		}
		else{
			var json = JSON.parse(res.responseText);
			// 创建一个分类的节点
			var album = document.createElement("div");
			album.setAttribute("id","album");

			var ul = document.createElement("ul");
			album.appendChild(ul);

			var content = document.getElementById("content");
			content.appendChild(album);


			var showOrder = 1;

			json.content.forEach(function(item,index,array){

				var li = document.createElement("li");
				var img_a = document.createElement("a");
				img_a.setAttribute("href","#album/"+item.url);
				img_a.setAttribute("class","img-link");
				var img = document.createElement("img");
				img.setAttribute("src","/database/album/"+item.url+"/cover.png");
				img.setAttribute("alt","栏目配图");
				img_a.appendChild(img);
				li.appendChild(img_a);


				var a = document.createElement("a");
				a.setAttribute("href","#album/"+item.url);
				a.setAttribute("class","album-link");
				var text = document.createTextNode(item.name);
				a.appendChild(text);
				li.appendChild(a);

				var sub = document.createElement("sub");
				var sub_text = document.createTextNode(getLocalTime(item.date));
				sub.appendChild(sub_text);
				li.appendChild(sub);

				setTimeout(function(){
					ul.appendChild(li);
				},200*showOrder);
				showOrder++;
			});
		}
	});
}




function loadAlbum(url){
	var content = document.getElementById("content");
	while(content.hasChildNodes()){
		content.removeChild(content.firstChild);
	}

	http.get("/database/album/"+url+"/"+url+".json",function(res){
		if(res.status!==200){
			console.log(res.statusText);
			 if (res.status == 404)
				to404();
		}
		else{
			var json = JSON.parse(res.responseText);
			// 创建一个分类的节点
			var pic = document.createElement("div");
			pic.setAttribute("id","pic");

			var content = document.getElementById("content");
			content.appendChild(pic);

			for(var i=1;i<=json.qua;i++){
				var a = document.createElement("a");
				a.setAttribute("href","#album/"+url+"/"+i);
				a.setAttribute("style","background-image: url(/database/album/"+url+"/"+i+".png);");
				pic.appendChild(a);
			}
		}
	});
}


function loadPicBox(url,index){

	var qua;
	http.get("/database/album/"+url+"/"+url+".json",function(res){
		if(res.status!==200){
			console.log(res.statusText);
			 if (res.status == 404)
				to404();
		}
		else{
			var json = JSON.parse(res.responseText);
			// 创建一个分类的节点
			var boxImg = document.getElementById("box-img");
			var picBox = document.getElementById("pic-box");

			boxImg.src = "/database/album/"+url+"/"+index+".png";
			boxImg.qua = json.qua;
			qua = json.qua;
			boxImg.setAttribute("src","/database/album/"+url+"/"+index+".png");
			boxImg.setAttribute("qua",json.qua);
			picBox.style.display = "block";
			check();
		}
	});
	var picBox = document.getElementById("pic-box");
	var exit = document.getElementById("exit");
	var pre = document.getElementById("pre");
	var next = document.getElementById("next");

			var boxImg = document.getElementById("box-img");
	function check(){	// 判断左右按钮的存在
		if(index == 1){
			pre.style.display = "none";
		}
		else{
			pre.style.display = "block";
		}
		if(index == qua){
			next.style.display = "none";
		}
		else{
			next.style.display = "block";
		}
	}


	picBox.onclick = function(){
		picBox.style.display = "none";
		location.hash = location.hash.slice(0,location.hash.lastIndexOf("/"));
	}

	exit.onclick = function(e){
		e.stopPropagation();//window.event.cancelBubble = true; 
		e.preventDefault();
		picBox.style.display = "none";
		location.hash = location.hash.slice(0,location.hash.lastIndexOf("/"));
	}
	pre.onclick = function(e){
		e.stopPropagation();//window.event.cancelBubble = true; 
		e.preventDefault();
		// var qua = document.getElementById("box-img").qua;
		// var src = document.getElementById("box-img").src;
		// var num = Number(src.slice(src.lastIndexOf("/")+1,src.lastIndexOf("png")-1));

		index--;
		boxImg.setAttribute("src","/database/album/"+url+"/"+index+".png");
		check();


	}
	next.onclick = function(e){
		e.stopPropagation();//window.event.cancelBubble = true; 
		e.preventDefault();
		// var qua = document.getElementById("box-img").qua;
		// var src = document.getElementById("box-img").src;
		// var num = Number(src.slice(src.lastIndexOf("/")+1,src.lastIndexOf("png")-1));

		index++;
		boxImg.setAttribute("src","/database/album/"+url+"/"+index+".png");
		check();


	}



}



function loadWorksList(hashkind){
	var content = document.getElementById("content");
	while(content.hasChildNodes()){
		content.removeChild(content.firstChild);
	}

	http.get("/database/works/works.json",function(res){
		if(res.status!==200){
			console.log(res.statusText);
			 if (res.status == 404)
				to404();
		}
		else{
			var json = JSON.parse(res.responseText);
			// var kinds = ["全部","生活","技术","记录"];
			// var kindsName = ["all","life","skill","record"];
			var kind = {"all":"全部","web":"前端","ps":"Ps","others":"其他"};
			// 创建一个分类的节点
			var classify = document.createElement("div");
			classify.setAttribute("id","classify");
			// for(var i = 0; i < kinds.length; i++){
			// 	var node = document.createElement("a");
			// 	node.setAttribute("href","#list/"+kindsName[i]);
			// 	var text = document.createTextNode(kinds[i]);
			// 	node.appendChild(text);
			// 	classify.appendChild(node);
			// }
			for(var item in kind){
				var node = document.createElement("a");

				node.setAttribute("href","#works/"+item);
				var text = document.createTextNode(kind[item]);
				node.appendChild(text);
				classify.appendChild(node);

			}



			var works = document.createElement("div");
			works.setAttribute("id","works");

			var content = document.getElementById("content");
			content.appendChild(works);
			works.appendChild(classify);

			var ul = document.createElement("ul");
			works.appendChild(ul);

			var showOrder = 1;

			json.content.forEach(function(item,index,array){

				if(hashkind == "all" || hashkind == item.kind){
					var li = document.createElement("li");
					var img = document.createElement("img");
					img.setAttribute("src",item.img);
					img.setAttribute("alt","作品配图");

					li.appendChild(img);

					var div = document.createElement("div");

					var h3 = document.createElement("h3");
					var h3_text = document.createTextNode(item.title);
					h3.appendChild(h3_text);
					div.appendChild(h3);

					var kind_a = document.createElement("a");
					kind_a.setAttribute("href","#works/"+item.kind);
					var kind_text = document.createTextNode("分类："+kind[item.kind]);
					kind_a.appendChild(kind_text);
					div.appendChild(kind_a);

					var p = document.createElement("p");
					var p_text = document.createTextNode(item.text);
					p.appendChild(p_text);
					div.appendChild(p);

					var view_a = document.createElement("a");
					var a_text = document.createTextNode("view");
					if(item.url == undefined){
						view_a.setAttribute("class","view disable");
					}
					else{
						view_a.setAttribute("class","view");
						view_a.setAttribute("href",item.url);
						view_a.setAttribute("target","_blank");
					}
					view_a.appendChild(a_text);
					div.appendChild(view_a);

					li.appendChild(div);

					setTimeout(function(){
						ul.appendChild(li);
					},200*showOrder);
					showOrder++;
				}


			});
		}
	});
}







function loadThis(){
	var content = document.getElementById("content");
	while(content.hasChildNodes()){
		content.removeChild(content.firstChild);
	}

	http.get("/database/this/this.json",function(res){
		if(res.status!==200){
			console.log(res.statusText);
			 if (res.status == 404)
				to404();
		}
		else{
			var json = JSON.parse(res.responseText);
			var article = document.createElement("article");
			article.setAttribute("id","article");
			document.getElementById("content").appendChild(article);
			json.content.forEach(function(item,index,array){
				for(var o in item){
					var para = document.createElement(o);
					if(o =="img"){
						for(var atr in item[o]){
							para[atr]=item[o][atr];
							para[atr]="/database/this/"+item[o][atr];
						article.appendChild(para);
						}
					}
					else{
						var node = document.createTextNode(item[o]);
						para.appendChild(node);
						article.appendChild(para);
					}
				}
			});
		}
	});
}



function to404(){
	var content = document.getElementById("content");
	while(content.hasChildNodes()){
		content.removeChild(content.firstChild);
	}
	var div = document.createElement("div");
	div.setAttribute("id","to404");
	var h1 = document.createElement("h1");
	var h1_text = document.createTextNode("404 :(");
	h1.appendChild(h1_text);
	var p1 = document.createElement("p");
	var p1_text = document.createTextNode("亲爱的宝宝，您要访问的页面不存在哦。");
	p1.appendChild(p1_text);
	var p2 = document.createElement("p");
	var p2_text = document.createTextNode("Oh,dear,the page you're looking for cannot be found.");
	p2.appendChild(p2_text);
	div.appendChild(h1);
	div.appendChild(p1);
	div.appendChild(p2);
	content.appendChild(div);
}


function getLocalTime(nS) {
	return new Date(parseInt(nS)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}