// var homeTop = document.getElementById("homeTop");
// console.log(homeTop);
// homeTop.onmouseover = function(e){
// 	console.log(e.target);
// 	console.log("over");
// }
// homeTop.onmouseout = function(e){
// 	console.log(e.target);
// 	console.log("out");
// }





// $(document).ready(function(){

// 		var diary = {};
// 		var content = $("article");
// 		$.getJSON("/javascript/0001.json",function(data){
// 			// console.log(data);
// 			$.each(data,function(key,value){
// 				key = key.slice(0,key.indexOf("-"));
// 				if(key == "img"){
// 					content.append("<"+key+" "+value+">"+"</"+key+">");
// 				}
// 				else{
// 					content.append("<"+key+">"+value+"</"+key+">");
// 				}
// 			});
// 		});


// });

// READY(function(){
// 	http.get("/javascript/0002.json",function(res){
// 		if(res.status!==200){
// 			alert(res.statusText);
// 		}
// 		else{
// 			console.log(res);
// 			var json = JSON.parse(res.responseText);
// 			var article = document.createElement("article");
// 			document.getElementById("content").appendChild(article);
// 			json.content.forEach(function(item,index,array){
// 				for(var o in item){
// 					var para = document.createElement(o);
// 					if(o =="img"){
// 						for(var atr in item[o]){
// 							para[atr]=item[o][atr];
// 						article.appendChild(para);
// 						}
// 					}
// 					else{
// 						var node = document.createTextNode(item[o]);
// 						para.appendChild(node);
// 						article.appendChild(para);
// 					}
// 				}
// 			});
// 		}
// 	});
// });
