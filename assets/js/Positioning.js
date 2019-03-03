$(document).ready(function() {
    positionLevelChanger();
});

function positionLevelChanger() {
    let changerButtons = $('#level-changer');

    // Get x of level text
    let levelText = $('#current-level-text');
    let lftVal = parseInt(getComputedStyle(document.body).getPropertyValue('--fixed-margin'));
    console.log(levelText.height());
    changerButtons.css('right', lftVal + levelText.height() + (lftVal / 2));
}