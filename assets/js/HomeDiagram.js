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

        // Attach floor changing buttons
        $('.increase-button').on("click", this.upOneFloor.bind(this));
        $('.decrease-button').on("click", this.downOneFloor.bind(this));
    }

    HomeDiagram.resize = function() {
        let width = Application.renderer.width;
        
        resizeSpriteByWidth(width, this);

        HomeDiagram.position.set(window.innerWidth / 2, window.innerHeight / 2);
    }

    HomeDiagram.update = function() {
    }


    HomeDiagram.upOneFloor = function() {
        if (this.currentFloorIndex == this.floors.length - 1) {
            return;
        }

        this.currentFloorIndex++;
        this.assignFloor();

        if (this.currentFloorIndex == this.floors.length - 1) {
            $('.increase-button').fadeOut(100);
        }
        $('.decrease-button').fadeIn(100);
    }

    HomeDiagram.downOneFloor = function() {
        if (this.currentFloorIndex == 0) {
            return;
        }

        this.currentFloorIndex--;
        this.assignFloor();

        if (this.currentFloorIndex == 0) {
            $('.decrease-button').fadeOut(100);
        }
        $('.increase-button').fadeIn(100);
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