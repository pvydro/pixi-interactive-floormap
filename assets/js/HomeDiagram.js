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
    // Create all floors
    HomeDiagram.floors = [
        new HomeFloor(FloorType.LOWER),
        new HomeFloor(FloorType.MIDDLE),
        new HomeFloor(FloorType.UPPER)
    ]
    HomeDiagram.currentFloorIndex = 0;
    HomeDiagram.currentFloor = HomeDiagram.floors[HomeDiagram.currentFloorIndex];

    // Apply home diagram dragging capabilities
    HomeDiagram.interactive = true;
    HomeDiagram.buttonMode = true;
    TinkObj.makeDraggable(HomeDiagram);

    // Set initial HomeDiagram position
    HomeDiagram.anchor.set(0.5);
    HomeDiagram.position.set(window.innerWidth / 2, window.innerHeight / 2);

    HomeDiagram.init = function() {
        // Initialize all rooms
        createAllRooms();

        // Initialize initial floor
        this.assignFloor();

        // Initialize all floors
        // for (var i in this.floors) {
        //     let f = this.floors[i];
        //     f.init();
        // }

        // Set initial floor
    }

    HomeDiagram.resize = function() {
        let width = Application.renderer.width;
        
        resizeSpriteByWidth(width, this);

        HomeDiagram.position.set(window.innerWidth / 2, window.innerHeight / 2);
    }

    HomeDiagram.update = function() {
    }


    HomeDiagram.upOneFloor = function() {

    }

    HomeDiagram.downOneFloor = function() {

    }

    HomeDiagram.assignFloor = function() {
        // Get floor using index
        this.currentFloor = this.floors[this.currentFloorIndex];

        this.currentFloor.init();

        // Init functions
        this.currentFloor.populateSideNav();
    }

    // Initialize
    HomeDiagram.init();

    // Return new HomeDiagram sprite
    return HomeDiagram;
}