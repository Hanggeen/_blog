var totop = document.getElementById("totop");
totop.onclick = function(e){
	e.preventDefault();
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.onscroll = function(){

	var scroll = getScrollTop();
	var clientHeight = getClientHeight();
	var totop = document.getElementById("totop");


	if(scroll > clientHeight){
		totop.style.display = 'inline-block';
	}
	else{
		totop.style.display = 'none';
	}



	function getScrollTop(){
		var scrollTop=0;
		if(document.documentElement&&document.documentElement.scrollTop){
			scrollTop=document.documentElement.scrollTop;
		}
		else if(document.body){
			scrollTop=document.body.scrollTop;
		}
		return scrollTop;
	}
	function getClientHeight(){
		var clientHeight=0;
		if(document.body.clientHeight&&document.documentElement.clientHeight){
			var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
		}
		else{
			var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;    
		}
		return clientHeight;
	}

}
