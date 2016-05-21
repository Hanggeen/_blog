window.http = {
	get:function(url,func){
		var xhr;
		if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			xhr=new XMLHttpRequest();
		}
		else{// code for IE6, IE5
			xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.open("GET",url,true);
		// 状态发生变化时调用
		xhr.onreadystatechange = function(){
			// 请求已完成
			if (xhr.readyState==4){
    				func(xhr);
    			}
		}
		xhr.send();
	}
}

// window.http = {
// 	get:function(url,func){
// 		var xhr;
// 		if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
// 			xhr=new XMLHttpRequest();
// 		}
// 		else{// code for IE6, IE5
// 			xhr=new ActiveXObject("Microsoft.XMLHTTP");
// 		}
// 		xhr.open("GET",url,true);
// 		// 状态发生变化时调用
// 		xhr.onreadystatechange = function(){
// 			// 请求已完成
// 			if (xhr.readyState==4){
//     				var status = xhr.status;
//     				var statusText = xhr.statusText;
//     				var json;
//     				var xml;
//     				// 请求成功
//     				if(xhr.status==200){
//     					// 没做后台，无法写入contentType，所以无论请求内容是XML还是json，只能自己读取。而responseText是一定有的，所以优先判断responseXML
//     					console.log(xhr);
//     					if(xhr.responseXML)
//     						xml = xhr.responseXML;
//     					else if(xhr.responseText)
//     						json = JSON.parse(String(xhr.responseText));
//     					else ;
//     				}
//     				// 将状态，状态描述，json和xml包装成对象返回
//     				var res = {status,statusText,json,xml};
//     				func(res);
//     			}
// 		}
// 		xhr.send();
// 	}
// }

