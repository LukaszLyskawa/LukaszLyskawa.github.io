function InitGallery()
{
	var galleries=$(".gallery");
  for(var i = 0; i<galleries.length;i++)
  {
  	AddSwitcher(galleries[i].id);
    galleryiter=[];
  	galleryiter.push(1);
  }
}
function StartGallery()
{
  var galleries=$(".gallery");
  for(var i = 0; i<galleries.length;i++)
  {
    SwitchImage(i,galleries[i].id);
    galleryiter[i]++;
  }
}
function AddSwitcher(id)
{
	var w = $("#"+id).attr("width");
  $("#"+id).after("<img class='galleryhidden galleryswitcher' id='"+id+"Switcher' width='"+w+"' src='"+$("#"+id).attr("src")+"'>");
}
function SwitchImage(i,id)
{
	var basepath = $("#"+id).attr("src");
	var currpath = basepath.split("/");
  
  var filename = currpath[currpath.length-1];
  var path = basepath.replace(filename,parseInt(galleryiter[i])+1+".png");
  if(!fileExists(path))
  {
  	galleryiter[i]=0;
  }
  var path = basepath.replace(filename,parseInt(galleryiter[i])+1+".png");
  console.log(path);
  if(parseInt(galleryiter[i])%2!=0)
  {
  	$("#"+id+"Switcher").attr("src",path);
    $("#"+id+"Switcher").removeClass("galleryhidden");
    $("#"+id).addClass("galleryhidden");
  }else
  {
  	$("#"+id).attr("src",path);
    $("#"+id).removeClass("galleryhidden");
    $("#"+id+"Switcher").addClass("galleryhidden");
  }
}
function fileExists(url)
{
	var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}