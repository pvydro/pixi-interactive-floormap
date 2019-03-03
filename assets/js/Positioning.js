$(document).ready(function() {
    positionLevelChanger();
});

function positionLevelChanger() {
    let changerButtons = $('#level-changer');

    let levelText = $('#current-level-text');
    let lftVal = parseInt(getComputedStyle(document.body).getPropertyValue('--fixed-margin'));
    changerButtons.css('right', lftVal + levelText.height() + (lftVal / 2));
}