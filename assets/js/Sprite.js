function resizeSpriteByWidth(width, sprite) {
    let newScale = width / sprite.width;
    sprite.width = width;
    sprite.height = sprite.height * newScale;
}
function resizeSpriteByHeight(height, sprite) {
    let newScale = height / this.height;
    sprite.height = height;
    sprite.width = sprite.width * newScale;
}