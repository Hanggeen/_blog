var showNav = document.getElementById("showNav");
var nav_flag = false;
showNav.onclick = function(){
	if(nav_flag){
		var nav = document.getElementById("nav");
		nav.style.display = "none";
		nav_flag = false;
	}
	else{
		var nav = document.getElementById("nav");
		nav.style.display = "block";
		nav_flag = true;
	}
}

document.onclick = function(e){
	if(e.target!= showNav){
		var nav = document.getElementById("nav");
		nav.style.display = "none";
		nav_flag = false;
	}
}

