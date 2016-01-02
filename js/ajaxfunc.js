function changeContent(file){
$.ajax({url: "Kontakty.html", success: function(result){
        $("#content").html(result);
    }, fail: function(){
        alert("ajaxfailed");
    }});
//     if (file == "") {
//         $("#content").html = "";
//         return;
//     } else {



//         // if (window.XMLHttpRequest) {
//         //     // code for IE7+, Firefox, Chrome, Opera, Safari
//         //     xmlhttp = new XMLHttpRequest();
//         // } else {
//         //     // code for IE6, IE5
//         //     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//         // }
//         // xmlhttp.onreadystatechange = function() {
//         //     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//         //         document.getElementById("content").innerHTML = xmlhttp.responseText;
//         //         $('pre code').each(function(i, block) {
//         //             hljs.highlightBlock(block);
//         //         });
//         //     }
//         // };
//         switch(file)
//         {
//             case "Projekty":
// //                var loc = window.location.href,
// //                    index = loc.indexOf('#');
// //
// //                if (index > 0) {
// //                  window.location = loc.substring(0, index);
// //                }
//                 window.location.hash="projects";
//                 // xmlhttp.open("GET","Projekty.html",true);
//                 $.ajax({url: "lyskawa.pl/Projekty.html", success: function(result){
//                     $("#content").html(result);
//                     alert("success");
//                 }});
//                 break;
//             case "Certyfikaty":
//                 window.location.hash="certificates";
//                 $.ajax({url:"lyskawa.pl/Certyfikaty.html",success: function(result){
//                     $("#content").html(result);
//                 }});
//                 break;
//             case "Kontakt":
//                 window.location.hash="contact";
//                 $.ajax({url:"lyskawa.pl/Kontakt.html",success: function(result){
//                     $("#content").html(result);
//                 }});
//                 break;
//         }
//         alert(file);
//         // xmlhttp.send();
        

    //}
}


