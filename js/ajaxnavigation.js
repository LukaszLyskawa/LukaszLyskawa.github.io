function navigationinit() {
    checkForFragmentId();
    $("#projects").click(function() {
        $.ajax({
            url: "Projekty.html",
            success: function(result) {
                $("#content").html(result);
                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
                $("#nav-p0").click(function() {
                    scrollInto("#RossmannFotowelt", -100, 1000);
                });
                $("#nav-p1").click(function() {
                    scrollInto("#SystemLekarski", -100, 1000);
                });
                $("#nav-p2").click(function() {
                    scrollInto("#MagicSquareRush", -100, 1000);
                });
                $("#nav-p3").click(function() {
                    scrollInto("#TeamRandomizer", -100, 1000);
                });
                $(".navbutton").click(function() {
                    scrollInto("header", 0, 1000);
                });
                window.location.hash = "projects";
                Localize();
            }
        });
    });
    $("#certificates").click(function() {
        $.ajax({
            url: "Certyfikaty.html",
            success: function(result) {
                $("#content").html(result);
                window.location.hash = "certificates";
                Localize();
            }
        });
    });
    $("#contact").click(function() {
        $.ajax({
            url: "Kontakt.html",
            success: function(result) {
                $("#content").html(result);
                window.location.hash = "contact";
                Localize();
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
                    $("#nav-p0").click(function() {
                        scrollInto("#RossmannFotowelt", -100, 1000);
                    });
                    $("#nav-p1").click(function() {
                        scrollInto("#SystemLekarski", -100, 1000);
                        //window.location.hash = "#SystemLekarski";
                    });
                    $("#nav-p2").click(function() {
                        scrollInto("#MagicSquareRush", -100, 1000);
                        //window.location.hash = "#MagicSquareRush";
                    });
                    $("#nav-p3").click(function() {
                        scrollInto("#TeamRandomizer", -100, 1000);
                        //window.location.hash = "#TeamRandomizer";
                    });
                    $(".navbutton").click(function() {
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
                $("#nav-p0").click(function() {
                    scrollInto("#RossmannFotowelt", -100, 1000);
                });
                $("#nav-p1").click(function() {
                    scrollInto("#SystemLekarski", -100, 1000);
                });
                $("#nav-p2").click(function() {
                    scrollInto("#MagicSquareRush", -100, 1000);
                });
                $("#nav-p3").click(function() {
                    scrollInto("#TeamRandomizer", -100, 1000);
                });
                $(".navbutton").click(function () {
                    scrollInto("header",0,1000);
                });
            }
        });
        $("#projects").addClass("active");


    }
}