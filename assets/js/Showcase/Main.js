var _ID = undefined;


$(document).ready(function() {
    // Get showcase parameters
    var urlParams = new URLSearchParams(location.search);
    let showcaseID = urlParams.get("showcase");
    // Set a default showcase ID
    if (!showcaseID) {
        console.log("No query passed, using R3Vlc3QgQmF0aHJvb20 as default (Guest bath)");
        showcaseID = "R3Vlc3QgQmF0aHJvb20=";
    }

    _ID = window.atob(showcaseID.toString());

    getShowcaseJSONObjectByID();
    assignText();
});