
function navigationinit()
{
    checkForFragmentId();
    $("#projects").mouseup(function(){
        $.ajax({url: "Projekty.html", success: function(result){
            $("#content").html(result);
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
            window.location.hash="projects";
            InitGallery();
            intervalhandler=window.setInterval(StartGallery,5000);
        }});
    });
    $("#certificates").mouseup(function(){
        $.ajax({url: "Certyfikaty.html", success: function(result){
            window.clearInterval(intervalhandler);
            $("#content").html(result);
            window.location.hash="certificates";
        }});
    });
    $("#contact").mouseup(function(){
        $.ajax({url: "Kontakt.html", success: function(result){
            window.clearInterval(intervalhandler);
            $("#content").html(result);
            window.location.hash="contact";
        }});
    });
}
function checkForFragmentId(){
    if(window.location.hash) {
        var hash = window.location.hash.substring(1);
        
        if(hash === "certificates")
        {
            $.ajax({url: "Certyfikaty.html", success: function(result){
                $("#content").html(result);
                window.clearInterval(intervalhandler);
            }});
            $("#certificates").addClass("active");
        }
        else if (hash === "contact")
        {
            $.ajax({url: "Kontakt.html", success: function(result){
                $("#content").html(result);
                window.clearInterval(intervalhandler);
            }});
            $("#contact").addClass("active");
        }
        else if(hash === "projects")
        {
            $.ajax({url: "Projekty.html", success: function(result){
                $("#content").html(result);
                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
            }});
            window.clearInterval(intervalhandler);
            InitGallery();
            intervalhandler=window.setInterval(StartGallery,5000);            
            $("#projects").addClass("active");
        }
    } else {
        $.ajax({url: "Projekty.html", success: function(result){
                $("#content").html(result);
                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
                window.clearInterval(intervalhandler);
                InitGallery();
                intervalhandler=window.setInterval(StartGallery,5000);
        }});
        $("#projects").addClass("active");
    }
}