window.onbeforeunload = loadHash();


window.onhashchange =function(){
	loadHash();
}

function loadHash(){
	var hash = location.hash;
	var i=1,j=1;
	var hashlist = new Array();
	while(i){
		i=hash.indexOf("/",i);
		if(i>0){
			hashlist.push(hash.slice(j,i));
		}
		else{
			hashlist.push(hash.slice(j));
		}
		j=++i;
	}
	// console.log(hashlist);
	switch(hashlist[0]){
		case undefined:
			loadHome();
			break;
		case "home":
			// alert("home");
			loadHome();
			break;
		case "list":
			{
				switch(hashlist[1]){
					case undefined:
						loadTextList("all");
						break;
					case "all":
						loadTextList("all");
						break;
					case "life":
						loadTextList("life");
						break;
					case "skill":
						loadTextList("skill");
						break;
					case "record":
						loadTextList("record");
						break;
					default:
						// alert("article : "+hashlist[1]);
						loadText(hashlist[1]);
				}
			}
			break;
		case "album":
			{
				switch(hashlist[1]){
					case undefined:
						// alert("album");
						loadAlbumList();
						break;
					default:
						// loadAlbum(hashlist[1]);
						{
							switch(hashlist[2]){
								case undefined:
									loadAlbum(hashlist[1]);
									break;
								default:
								// alert("show the big pic "+hashlist[2]);
									loadPicBox(hashlist[1],hashlist[2]);
							}
						}
				}
			}
			break;
		case "works":
			{
				switch(hashlist[1]){
					case undefined:
						loadWorksList("all");
						break;
					case "all":
						loadWorksList("all");
						break;
					case "web":
						loadWorksList("web");
						break;
					case "ps":
						loadWorksList("ps");
						break;
					case "others":
						loadWorksList("others");
						break;
					default:
						to404();
				}
			}
			break;
		case "this":
			loadThis();
			break;
		default:
			to404();
	}

	document.body.scrollTop = 0;


}