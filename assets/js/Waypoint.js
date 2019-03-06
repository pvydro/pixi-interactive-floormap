class Waypoint {
    constructor(xPercent, yPercent, showcaseID) {
        this.xPercent = xPercent;
        this.yPercent = yPercent;
        this.showcaseID = showcaseID;

        let radius = 60
        let circTxt = generateCircleTexture(Application.renderer, radius, 0x459e76);
        this.sprite = new PIXI.Sprite(circTxt);

        // Set position
        this.sprite.anchor.set(0.5, 0.5);
        let diagramBounds = {
            x: HomeDiagram.position.x,
            y: HomeDiagram.position.y,
            width: HomeDiagram.width,
            height: HomeDiagram.height
        }

        this.sprite.x = diagramBounds.width * (xPercent * 0.01);
        this.sprite.y = diagramBounds.height * (yPercent * 0.01);

        // Assign functions
        this.sprite.update = this.update;
        this.sprite.clicked = this.clicked;

        // Animation variables
        this.sprite.State = {
            IDLE: 0,
            HOVERED: 1,
            CLICKED: 2
        }
        this.sprite.currentState = this.sprite.State.IDLE;
        this.sprite.targetScaleX = 1.0;
        this.sprite.targetScaleY = 1.0;
        this.sprite.scaleX = 1.0;
        this.sprite.scaleY = 1.0;

        WaypointManager.addWaypoint(this.sprite);
    }

    update() {
        // Hover
        if (this.currentState != this.State.CLICKED) {
            if (TinkPointer.hitTestSprite(this)) {
                this.currentState = this.State.HOVERED;
            } else {
                this.currentState = this.State.IDLE;
            }
        }

        // Alter target scale based on state
        switch (this.currentState) {
            case this.State.IDLE:
                this.targetScaleX = 1.0;
                this.targetScaleY = 1.0;
            break;
            case this.State.HOVERED:
                this.targetScaleX = 1.1;
                this.targetScaleY = 1.7;
            break;
            case this.State.CLICKED:
                this.targetScaleX = 1.15;
                this.targetScaleY = 1.15;
            break;
        }

        // Animate sprite scale
        this.scaleX += (this.targetScaleX - this.scaleX) / 1.3;
        this.scaleY += (this.targetScaleY - this.scaleY) / 1.3;
        
        // Apply sprite scale
        this.scale.x = this.scaleX / 3;
        this.scale.y = this.scaleY / 3;
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

    let dropShadowFilter = new PIXI.filters.DropShadowFilter();
    dropShadowFilter.color = 0x000020;
    dropShadowFilter.quality = 10;
    dropShadowFilter.alpha = 0.5;
    dropShadowFilter.blur = 3;
    dropShadowFilter.distance = 10;

    gfx.filters = [ dropShadowFilter ];
  
    renderer.render(gfx, texture);
  
    return texture;
  }