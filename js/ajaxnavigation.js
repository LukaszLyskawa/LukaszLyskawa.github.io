function navigationinit() {
    checkForFragmentId();
    $("#projects").mouseup(function() {
        $.ajax({
            url: "Projekty.html",
            success: function(result) {
                $("#content").html(result);
                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
                $("#nav-p1").mouseup(function() {
                    scrollInto("#SystemLekarski", -100, 1000);
                    //window.location.hash = "#SystemLekarski";
                });
                $("#nav-p2").mouseup(function() {
                    scrollInto("#MagicSquareRush", -100, 1000);
                    //window.location.hash = "#MagicSquareRush";
                });
                $("#nav-p3").mouseup(function() {
                    scrollInto("#TeamRandomizer", -100, 1000);
                    //window.location.hash = "#TeamRandomizer";
                });
                $(".navbutton").mouseup(function() {
                    scrollInto("header", 0, 1000);
                });
                window.location.hash = "projects";
            }
        });
    });
    $("#certificates").mouseup(function() {
        $.ajax({
            url: "Certyfikaty.html",
            success: function(result) {
                $("#content").html(result);
                window.location.hash = "certificates";
            }
        });
    });
    $("#contact").mouseup(function() {
        $.ajax({
            url: "Kontakt.html",
            success: function(result) {
                $("#content").html(result);
                window.location.hash = "contact";
            }
        });
    });

}

function checkForFragmentId() {
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);

        if (hash === "certificates") {
            $.ajax({
                url: "Certyfikaty.html",
                success: function(result) {
                    $("#content").html(result);

                }
            });
            $("#certificates").addClass("active");
        } else if (hash === "contact") {
            $.ajax({
                url: "Kontakt.html",
                success: function(result) {
                    $("#content").html(result);

                }
            });
            $("#contact").addClass("active");
        } else {
            $.ajax({
                url: "Projekty.html",
                success: function(result) {
                    $("#content").html(result);



                    $('pre code').each(function(i, block) {
                        hljs.highlightBlock(block);
                    });
                    $("#nav-p1").mouseup(function() {
                        scrollInto("#SystemLekarski", -100, 1000);
                        //window.location.hash = "#SystemLekarski";
                    });
                    $("#nav-p2").mouseup(function() {
                        scrollInto("#MagicSquareRush", -100, 1000);
                        //window.location.hash = "#MagicSquareRush";
                    });
                    $("#nav-p3").mouseup(function() {
                        scrollInto("#TeamRandomizer", -100, 1000);
                        //window.location.hash = "#TeamRandomizer";
                    });
                    $(".navbutton").mouseup(function() {
                        scrollInto("header", 0, 1000);
                    });

                    if (hash !== 'projects') {
                        scrollInto("#" + hash, -100, 1000);

                    }



                }
            });

            $("#projects").addClass("active");
        }
    } else {
        $.ajax({
            url: "Projekty.html",
            success: function(result) {
                $("#content").html(result);


                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
                $("#nav-p1").mouseup(function() {
                    scrollInto("#SystemLekarski", -100, 1000);
                    //window.location.hash = "#SystemLekarski";
                });
                $("#nav-p2").mouseup(function() {
                    scrollInto("#MagicSquareRush", -100, 1000);
                    //window.location.hash = "#MagicSquareRush";
                });
                $("#nav-p3").mouseup(function() {
                    scrollInto("#TeamRandomizer", -100, 1000);
                    //window.location.hash = "#TeamRandomizer";
                });
                $(".navbutton").mouseup(function () {
                    scrollInto("header",0,1000);
                });
            }
        });
        $("#projects").addClass("active");


    }
}