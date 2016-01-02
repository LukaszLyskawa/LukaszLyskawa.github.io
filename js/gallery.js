function SwitchImage()
{
	//img/gallery/{id}/1.png
	var currpath = $(".gallery").prop('src').split("/");
	var curritem = currpath[currpath.length-1].split(".")[0];
	
	$(".gallery").attr('src','newsrc')
}
function fileExists(url)
{
	var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
