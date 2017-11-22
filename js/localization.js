function Localize(file) {
	if(file==null)
	{
		file=currentLocale+"_locale.json";
	}
    $.getJSON(file, function(json) {
        localization = json;
        $("#local_Name").html(json.Name);
        $("#projects").html(json.Navigation.Projects);
        $("#certificates").html(json.Navigation.Certificates);
        $("#contact").html(json.Navigation.Contact);

        $(".local_PDF").prop("href",json.Docs.PDF);
        $(".local_DOCX").prop("href",json.Docs.DOCX);

	    $("#local_Certificates").html(localization.Navigation.Certificates);

	    $("#local_Contact").html(localization.Navigation.Contact);
        $("#local_Bio").html(localization.Bio);
        
        $("#local_Proj0").html(localization.Projects[0]);
        $("#local_Proj1").html(localization.Projects[1]);
        $("#local_Proj2").html(localization.Projects[2]);
        $("#local_Proj3").html(localization.Projects[3]);
    });
}

	 