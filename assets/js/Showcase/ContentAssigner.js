var ShowcaseJSONObject = undefined;

function assignText() {
    // Add header text
    $("#text-column .title h1").text(ShowcaseJSONObject.name);
    $("#text-column .showcase-text p").text(ShowcaseJSONObject.description);
    // $("")
    
    // Apply background
    $(".image-holder-background").css({
        "background-image": "url(" + $('.showcase-image').attr('src') + ")"
    })
}

function getShowcaseJSONObjectByID() {
    for (var i in ShowcaseContentJSON) {
        if (ShowcaseContentJSON[i].id == _ID) {
            ShowcaseJSONObject = ShowcaseContentJSON[i];
        }
    }
}