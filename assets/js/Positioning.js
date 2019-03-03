$(document).ready(function() {
    positionLevelChanger();
    levelChangerHovering();
    
});

function positionLevelChanger() {
    let changerButtons = $('#level-changer');

    let levelText = $('#current-level-text');
    let lftVal = parseInt(getComputedStyle(document.body).getPropertyValue('--fixed-margin'));
    changerButtons.css('right', lftVal + levelText.height() + (lftVal / 2));
}

function levelChangerHovering() {
    $('#level-changer .level-button').on('click mouseenter', function() {
        $(this).addClass("triggered");

        setTimeout(function() {
            $(this).removeClass("triggered");
        }.bind(this), 500);
    });
}