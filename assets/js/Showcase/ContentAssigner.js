var ShowcaseJSONObject = undefined;

function assignText() {
    // Add content to page elements
    $("#text-column .title h1").text(ShowcaseJSONObject.name);
    $("#text-column .showcase-text p").text(ShowcaseJSONObject.description);
    let imageSrc = 'assets/imgs/showcase/' + ShowcaseJSONObject.image
    $(".showcase-image").attr('src', imageSrc);
    
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