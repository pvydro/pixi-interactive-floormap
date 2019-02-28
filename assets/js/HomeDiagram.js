var HomeDiagram = undefined;

function createHomeDiagram() {
    // Get home diagram graphics
    let homeLowDiagramTexture = PIXI.Texture.from(ImageURLS.HOME_LOWER_DIAGRAM);
    let homeMidDiagramTexture = PIXI.Texture.from(ImageURLS.HOME_MID_DIAGRAM);
    let homeUpperDiagramTexture = PIXI.Texture.from(ImageURLS.HOME_UPPER_DIAGRAM);
    // Create home diagram sprite
    HomeDiagram = new PIXI.Sprite(homeLowDiagramTexture);

    // Add all textures to HomeDiagram
    HomeDiagram.lowTexture = homeLowDiagramTexture;
    HomeDiagram.midTexture = homeMidDiagramTexture;
    HomeDiagram.upperTexture = homeUpperDiagramTexture;
    // Apply home diagram dragging capabilities
    HomeDiagram.interactive = true;
    HomeDiagram.buttonMode = true;
    TinkObj.makeDraggable(HomeDiagram);
    // Set initial HomeDiagram position
    HomeDiagram.anchor.set(0.5);
    HomeDiagram.position.set(window.innerWidth / 2, window.innerHeight / 2);

    HomeDiagram.resize = function() {
        let width = Application.renderer.width;
        
        resizeSpriteByWidth(width, this);

        HomeDiagram.position.set(window.innerWidth / 2, window.innerHeight / 2);
    }

    HomeDiagram.update = function() {
    }

    // Add new home diagram sprite to stage
    return HomeDiagram;
}