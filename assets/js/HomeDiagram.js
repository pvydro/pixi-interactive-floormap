var HomeDiagram = undefined;

function createHomeDiagram() {
    // Create home diagram sprite
    // HomeDiagram = new PIXI.Sprite(PIXI.Texture.from(ImageURLS.HOME_LOWER_DIAGRAM));
    HomeDiagram = new PIXI.Sprite(PIXI.loader.resources[ImageURLS.HOME_LOWER_DIAGRAM].texture);

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

        HomeDiagram.checkLevelButtons();
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

        Transition.enableTransition(function() {
            this.currentFloorIndex++;
            this.assignFloor();
            this.checkLevelButtons();
        }.bind(this));

    }

    HomeDiagram.downOneFloor = function() {
        if (this.currentFloorIndex == 0) {
            return;
        }

        Transition.enableTransition(function() {
            this.currentFloorIndex--;
            this.assignFloor();
            this.checkLevelButtons();
        }.bind(this));
    }

    HomeDiagram.assignFloor = function() {
        // Get floor using index
        this.currentFloor = this.floors[this.currentFloorIndex];
        
        // Apply texture
        this.texture = this.currentFloor.texture;

        // Init functions
        this.currentFloor.init();
        this.currentFloor.populateSideNav();

    }

    HomeDiagram.checkLevelButtons = function() {
        if (this.currentFloorIndex == this.floors.length - 1) {
            $('.increase-button').css({
                'color': 'darkgray',
                'pointer-events': 'none'
            });
        } else {
            $('.increase-button').css({
                'color': 'black',
                'pointer-events': 'all'
            });
        }
        if (this.currentFloorIndex == 0) {
            $('.decrease-button').css({
                'color': 'darkgray',
                'pointer-events': 'none'
            });
        } else {
            $('.decrease-button').css({
                'color': 'black',
                'pointer-events': 'all'
            });
        }
    }

    // Initialize
    HomeDiagram.init();

    // Return new HomeDiagram sprite
    return HomeDiagram;
}