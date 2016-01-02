$(document).ready(function(){
	//window.setTimeout(switch,5000);
	alert(fileExists("img/cv-doc1.png"));
});

function SwitchImage()
{
	//img/gallery/{id}/1.png
	var currpath = $(".gallery").prop('src').split("/");
	var curritem = currpath[currpath.length-1].split(".")[0];
	
	current
	$(".gallery").attr('src','newsrc')
}

function fileExists(url)
{
	var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
