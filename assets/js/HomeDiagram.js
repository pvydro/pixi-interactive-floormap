var HomeDiagram = undefined;

function createHomeDiagram() {
    // Create home diagram sprite
    let homeDiagramTexture = PIXI.Texture.fromImage(ImageURLS.homeDiagram);
    HomeDiagram = new PIXI.Sprite(homeDiagramTexture);

    // applySpriteFunctions(HomeDiagram);

    HomeDiagram.resize = function() {
        // let width = window.innerWidth;
        let width = Application.renderer.width;
        // this.resizeByWidth(width);
        resizeSpriteByWidth(width, this);
    }

    HomeDiagram.update = function() {
    }

    // Add new home diagram sprite to stage
    return HomeDiagram;
}