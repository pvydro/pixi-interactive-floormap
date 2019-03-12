class Waypoint {
    constructor(xPercent, yPercent, showcaseID) {
        this.xPercent = xPercent;
        this.yPercent = yPercent;
        this.color = 0x9bbff7;
        this.hoveredColor = 0x224f3b;


        this.sprite = new PIXI.Sprite(PIXI.loader.resources[ImageURLS.WAYPOINT].texture);

        // Set position
        this.sprite.anchor.set(0.5, 0.5);
        let diagramBounds = {
            x: HomeDiagram.position.x,
            y: HomeDiagram.position.y,
            width: HomeDiagram.width,
            height: HomeDiagram.height
        }

        this.sprite.position.x = diagramBounds.width * (xPercent * 0.01);
        this.sprite.position.y = diagramBounds.height * (yPercent * 0.01);

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
        this.sprite.scaleX = 1.0;
        this.sprite.scaleY = 1.0;
        this.sprite.targetWidth = 0;
        this.sprite.targetHeight = 0;
        this.sprite.targetRotation = 0;
        this.sprite.responsiveScaleMultiplier = 1.0;
        this.sprite.color = this.color;
        this.sprite.interactive = true;
        this.sprite.clickedColor = 0x23513C;
        this.sprite.showcaseID = showcaseID;
        this.sprite.targetScale = 1.0;

        WaypointManager.addWaypoint(this.sprite);
    }

    update() {
        // Get base size
        let baseSize = Application.renderer.height * 0.03;

        // Hover
        if (this.currentState != this.State.CLICKED) {
            if (this.currentState == this.State.CLICKING) {
                if (!TinkPointer.isDown) {
                    this.currentState = this.State.CLICKED;
                    this.clicked();
                }
            } if (TinkPointer.hitTestSprite(this)
                && WaypointManager.noOthersClicked(this)) {
                this.currentState = this.State.HOVERED;
                if (TinkPointer.isDown) {
                    this.currentState = this.State.CLICKING;
                }
            } else {
                this.currentState = this.State.IDLE;
            }
        }

        // Alter target scale based on state
        switch (this.currentState) {
            case this.State.IDLE:
            case this.State.CLICKED:    // Fall through intended
                this.targetWidth = baseSize;
                this.targetHeight = baseSize;
                this.targetRotation = 0;
                this.tint = this.color;
            break;
            case this.State.HOVERED:
                this.targetWidth = baseSize * 1.1;
                this.targetHeight = baseSize * 1.1;
                this.targetRotation = 45 * (Math.PI / 180);
                this.tint = this.color;
            break;
            case this.State.CLICKING:
                this.targetWidth = baseSize * 0.9;
                this.targetHeight = baseSize * 0.9;
                this.targetRotation = 90 * (Math.PI / 180);
                this.tint = this.hoveredColor;
            break;
        }

        // Animate sprite scale and rotation
        let newScale = (HomeDiagram.maximumZoomScaleY - HomeDiagram.zoomScaleY);
        newScale *= 0.5;
        this.scale.x = newScale;
        this.scale.y = newScale;

        this.rotation += (this.targetRotation - this.rotation) / 1.5;
    }

    clicked() {
        showShowcasePage(window.btoa(this.showcaseID));
    }
}