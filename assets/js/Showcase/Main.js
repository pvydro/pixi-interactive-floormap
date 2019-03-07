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

    // Get JSON object by ID and assign content accordingly
    getShowcaseJSONObjectByID();
    assignText();

    // Enable TiltJS
    const tiltColumn = $('#text-column .tilt-container').tilt({
        glare: true,
        maxGlare: .2,
        maxTilt: 3,
        reset: true
    });

    $('.image-holder').on('click', function() {
        if (!$(this).hasClass('active')) {
            $("#image-column").addClass('active');
            $(this).addClass('active');
            $('#image-column .close-button').fadeIn(300);
        }
    });

    $('#image-column .close-button').on('click', function() {
        $('#image-column').removeClass('active');
        $('.image-holder').removeClass('active');
        $(this).fadeOut(300);
    });
});