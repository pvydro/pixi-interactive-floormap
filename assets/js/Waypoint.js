class Waypoint {
    constructor(xPercent, yPercent, showcaseID) {
        this.xPercent = xPercent;
        this.yPercent = yPercent;
        this.color = 0x459e76;

        let radius = 30;
        let circTxt = generateCircleTexture(Application.renderer, radius, this.color);
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
            CLICKING: 2,
            CLICKED: 3
        }
        this.sprite.currentState = this.sprite.State.IDLE;
        this.sprite.targetScaleX = 1.0;
        this.sprite.targetScaleY = 1.0;
        this.sprite.scaleX = 1.0;
        this.sprite.scaleY = 1.0;
        this.sprite.responsiveScaleMultiplier = 1.0;
        this.sprite.color = this.color;
        this.sprite.clickedColor = 0x23513C;
        this.sprite.showcaseID = showcaseID;

        WaypointManager.addWaypoint(this.sprite);
    }

    update() {
        // Configure scale multiplier by orientations
        this.responsiveScaleMultiplier = PORTRAIT ? 2.3 : 1.0;

        // Hover
        if (WaypointManager.noOthersClicked()) {
            if (this.currentState != this.State.CLICKED) {
                if (this.currentState == this.State.CLICKING) {
                    if (!TinkPointer.isDown) {
                        this.currentState = this.State.CLICKED;
                        this.clicked();
                    }
                } if (TinkPointer.hitTestSprite(this)) {
                    this.currentState = this.State.HOVERED;
                    if (TinkPointer.isDown) {
                        this.currentState = this.State.CLICKING;
                    }
                } else {
                    this.currentState = this.State.IDLE;
                }
            }
        }

        // Alter target scale based on state
        switch (this.currentState) {
            case this.State.IDLE:
                this.tint = 0xFFFFFF;
                this.targetScaleX = 1.0;
                this.targetScaleY = 1.0;
            break;
            case this.State.HOVERED:
                this.tint = 0xFFFFFF;
                this.targetScaleX = 1.2;
                this.targetScaleY = 1.2;
            break;
            case this.State.CLICKING:
                this.tint = this.color;
                this.targetScaleX = 0.9;
                this.targetScaleY = 0.9;
            break;
            case this.State.CLICKED:
                this.tint = 0xFFFFFF;
                this.targetScaleX = 1.15;
                this.targetScaleY = 1.15;
            break;
        }

        // Animate sprite scale
        this.scaleX += (this.targetScaleX - this.scaleX) / 1.3;
        this.scaleY += (this.targetScaleY - this.scaleY) / 1.3;
        
        // Apply sprite scale
        this.scale.x = this.scaleX;
        this.scale.y = this.scaleY;

        // Apply responsive scale
        this.scale.x *= this.responsiveScaleMultiplier;
        this.scale.y *= this.responsiveScaleMultiplier;
    }

    clicked() {
        showShowcasePage(window.btoa(this.showcaseID));
    }
}