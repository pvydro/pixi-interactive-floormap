class Waypoint {
    constructor(xPercent, yPercent, showcaseID) {
        this.xPercent = xPercent;
        this.yPercent = yPercent;
        this.showcaseID = showcaseID;

        // this.sprite = new PIXI.Sprite(PIXI.loader.resources[ImageURLS.TEST_LINK].texture);
        let circTxt = generateCircleTexture(Application.renderer, 20, 0xFF0000);
        this.sprite = new PIXI.Sprite(circTxt);
        this.sprite.anchor.set(0.5, 0.5);

        this.sprite.update = this.update;
        this.sprite.clicked = this.clicked;

        // HomeDiagram.addChild(p);
        WaypointManager.addWaypoint(this.sprite);
    }

    update() {
    }

    clicked() {
        
    }
}

const generateCircleTexture = (renderer, radius, color) => {
    const gfx = new PIXI.Graphics();
    const tileSize = radius * 3;
    const texture = PIXI.RenderTexture.create(tileSize, tileSize);
  
    gfx.beginFill(color);
    gfx.drawCircle(tileSize / 2, tileSize / 2, radius);
    gfx.endFill();
  
    renderer.render(gfx, texture);
  
    return texture;
  }