
var Navigation = {

    init: function()
    {
        checkForFragmentId();
        $("#projects").mouseup(function(){
            $.ajax({url: "Projekty.html", success: function(result){
                $("#content").html(result);
                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
            }});
        });
        $("#certificates").mouseup(function(){
            $.ajax({url: "Certyfikaty.html", success: function(result){
                $("#content").html(result);
                alert("certyfikaty");
            }});
        });
        $("#contact").mouseup(function(){
            $.ajax({url: "Kontakt.html", success: function(result){
                $("#content").html(result);
                alert("kontakt");
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
                    $('pre code').each(function(i, block) {
                        hljs.highlightBlock(block);
                    });  
                }});
                $("#certificates").addClass("active");
            }
            else if (hash === "contact")
            {
                $.ajax({url: "Kontakt.html", success: function(result){
                    $("#content").html(result);
                }});
                $("#contact").addClass("active");
            }
            else if(hash === "projects")
            {
                $.ajax({url: "Projekty.html", success: function(result){
                    $("#content").html(result);
                }});
                $("#projects").addClass("active");
            }
        } else {
            $.ajax({url: "Projekty.html", success: function(result){
                    $("#content").html(result);
                }});
            $("#projects").addClass("active");
        }
    }
}
