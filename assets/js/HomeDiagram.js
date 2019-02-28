var HomeDiagram = undefined;

function createHomeDiagram() {
    // Create home diagram sprite
    let homeDiagramTexture = PIXI.Texture.from(ImageURLS.homeDiagram);
    HomeDiagram = new PIXI.Sprite(homeDiagramTexture);

    // Apply home diagram dragging capabilities
    HomeDiagram.interactive = true;
    HomeDiagram.buttonMode = true;
    HomeDiagram.anchor.set(0.5);
    HomeDiagram.position.set(window.innerWidth / 2, window.innerHeight / 2);
    TinkObj.makeDraggable(HomeDiagram);

    HomeDiagram.resize = function() {
        // let width = window.innerWidth;
        let width = Application.renderer.width;
        
        // this.resizeByWidth(width);
        resizeSpriteByWidth(width, this);

        // HomeDiagram.position.x = Application.renderer.width / 2;
        // HomeDiagram.position.y = Application.renderer.height / 2;
        HomeDiagram.position.set(window.innerWidth / 2, window.innerHeight / 2);
    }

    HomeDiagram.update = function() {
    }

    // Add new home diagram sprite to stage
    return HomeDiagram;
}