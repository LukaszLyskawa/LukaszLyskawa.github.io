function changeContent(file){
    if (file == "") {
        document.getElementById("content").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("content").innerHTML = xmlhttp.responseText;
                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
                $("html").getNiceScroll().resize();
            }
        };
        switch(file)
        {
            case "Projekty":
//                var loc = window.location.href,
//                    index = loc.indexOf('#');
//
//                if (index > 0) {
//                  window.location = loc.substring(0, index);
//                }
                window.location.hash="projects";
                xmlhttp.open("GET","Projekty.html",true);
                break;
            case "Certyfikaty":
                window.location.hash="certificates";
                xmlhttp.open("GET","Certyfikaty.html",true);
                break;
            case "Kontakt":
                window.location.hash="contact";
                xmlhttp.open("GET","Kontakt.html",true);
                break;
        }
        
        xmlhttp.send();
        

    }
}


