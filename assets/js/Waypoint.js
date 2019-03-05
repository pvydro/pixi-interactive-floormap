class Waypoint {
    constructor(xPercent, yPercent, showcaseID) {
        this.xPercent = xPercent;
        this.yPercent = yPercent;
        this.showcaseID = showcaseID;

        console.log("New waypoint");

        // this.sprite = new PIXI.Graphics();
        // this.sprite.beginFill(0xFF0000);
        // this.sprite.lineStyle(0);
        // this.sprite.drawCircle(50, 50);
        // this.sprite.endFill();
        this.sprite = new PIXI.Sprite(PIXI.loader.resources[ImageURLS.TEST_LINK].texture);

        this.sprite.x = 50; this.sprite.y = 50;

        this.sprite.update = this.update;
        this.sprite.clicked = this.clicked;

        // HomeDiagram.addChild(p);
        WaypointManager.addWaypoint(this.sprite);

    }

    update() {
        console.log("Updating");
    }

    clicked() {
        
    }
}