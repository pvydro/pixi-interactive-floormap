var HomeDiagram = undefined;

function createHomeDiagram() {
    // Create home diagram sprite
    HomeDiagram = new PIXI.Sprite(PIXI.loader.resources[ImageURLS.HOME_LOWER_DIAGRAM].texture);

    // Create all floors
    HomeDiagram.floors = [
        new HomeFloor(FloorType.LOWER),
        new HomeFloor(FloorType.MIDDLE),
        new HomeFloor(FloorType.UPPER)
    ]
    HomeDiagram.currentFloorIndex = 1;
    HomeDiagram.currentFloor = HomeDiagram.floors[HomeDiagram.currentFloorIndex];

    for (var i in HomeDiagram.floors) {
        let f = HomeDiagram.floors[i];
    }

    // Apply home diagram dragging capabilities
    TinkObj.makeDraggable(HomeDiagram);

    // Zooming variables
    HomeDiagram.zoomSpeedDivisor = 20;
    HomeDiagram.zoomSmoothness = 4;
    HomeDiagram.targetZoomScaleY = 1.0;
    HomeDiagram.minimumZoomScaleY = 0.5;
    HomeDiagram.maximumZoomScaleY = 3.0;
    HomeDiagram.zoomScaleY = 1.0;

    HomeDiagram.init = function() {
        // Initialize all roomss
        createAllRooms();

        // Initialize initial floor
        this.assignFloor();

        // Attach floor changing buttons
        $('.increase-button').on("click", this.upOneFloor.bind(this));
        $('.decrease-button').on("click", this.downOneFloor.bind(this));

        HomeDiagram.checkLevelButtons();
    }

    HomeDiagram.resize = function() {
        HomeDiagram.zoomScaleY = 1.0;
        HomeDiagram.targetZoomScaleY = 1.0;
        HomeDiagram.scale.x = 1.0;
        HomeDiagram.scale.y = 1.0;
        HomeDiagram.anchor.set(0.5, 0.5);
        HomeDiagram.position.set(window.innerWidth / 2, window.innerHeight / 2);
    }

    HomeDiagram.resetPosition = function() {
        HomeDiagram.zoomScaleY = 1.0;
        HomeDiagram.targetZoomScaleY = 1.0;
        HomeDiagram.scale.x = 1.0;
        HomeDiagram.scale.y = 1.0;
        HomeDiagram.position.set(window.innerWidth / 2, window.innerHeight / 2);
    }

    HomeDiagram.update = function() {
        // Cap zoom amount
        if (this.targetZoomScaleY < this.minimumZoomScaleY) {
            this.targetZoomScaleY = this.minimumZoomScaleY;
        } else if (this.targetZoomScaleY > this.maximumZoomScaleY) {
            this.targetZoomScaleY = this.maximumZoomScaleY;
        }

        // Ease to zoom amount
        this.zoomScaleY += (this.targetZoomScaleY - this.zoomScaleY) / this.zoomSmoothness;

        this.scale.x = this.zoomScaleY;
        this.scale.y = this.zoomScaleY;
    }

    HomeDiagram.upOneFloor = function() {
        if (this.currentFloorIndex == this.floors.length - 1) {
            return;
        }

        Transition.enableTransition(function() {
            WaypointManager.clearWaypoints();
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
            WaypointManager.clearWaypoints();
            this.currentFloorIndex--;
            this.assignFloor();
            this.checkLevelButtons();
        }.bind(this));
    }

    HomeDiagram.assignFloor = function() {
        this.resize();
        // Get floor using index
        this.currentFloor = this.floors[this.currentFloorIndex];
        
        // Apply texture
        this.texture = this.currentFloor.texture;

        // Init functions
        this.currentFloor.init();
        this.currentFloor.populateSideNav();

        this.resize();
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

    HomeDiagram.scrollY = function(amount) {
        // Cap amount
        if (amount > 0.5) {
            amount = 0.5;
        }
        else if (amount < -0.5) {
            amount = -0.5;
        }

        // Add amount to target zoom
        this.targetZoomScaleY += (amount / this.zoomSpeedDivisor);
    }

    // Initialize
    HomeDiagram.init();

    // Return new HomeDiagram sprite
    return HomeDiagram;
}