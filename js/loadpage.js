$(document).ready(
    function(){
        console.log("dsa");
        checkForFragmentId();
    });
function checkForFragmentId(){
    if(window.location.hash) {
            var hash = window.location.hash.substring(1);
            
            if(hash === "certificates")
            {
                changeContent("Certyfikaty");
                $("#certificates").addClass("active");
            }
            else if (hash === "contact")
            {
                changeContent("Kontakt");
                $("#contact").addClass("active");
            }
            else if(hash === "projects")
            {
                changeContent("Projekty");
                $("#projects").addClass("active");
            }
            

        } else {
            changeContent("Projekty");
            $("#projects").addClass("active");
        }
}
