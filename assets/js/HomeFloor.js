var FloorType = {
    LOWER: "Lower Level",
    MIDDLE: "Middle Level",
    UPPER: "Upper Level"
}

class HomeFloor {
    constructor(floorType) {
        this.floorType = floorType;
        this.waypoints = [];
        this.rooms = this.findRooms();
        this.texture = this.findTexture();
    }

    populateSideNav() {
        $('#side-nav .nav-buttons').empty();
        // Loop through all rooms and create a button for each
        for (var i in this.rooms) {
            let roomObj = this.rooms[i];
            let roomTitle = RoomIDs[roomObj.id];

            // Create & append element
            let buttonElement = "<a class='nav-link'>" + roomTitle + "</a>";
            $('#side-nav .nav-buttons').append(buttonElement);
        }

        // Add listeners
        $('.nav-link').on('click', function() {
            let buttonText = $(this).html();
            WaypointManager.goToWaypoint(buttonText);
            if (PORTRAIT) {
                toggleNav();
            }
        })
    }

    init() {
        // Find all rooms
        this.rooms = this.findRooms();

        // Apply level name to level name text
        $('#current-level-text').text(this.floorType);
    }

    findRooms() {
        let rooms = [];
        let roomIDs = [];

        // Find ID array by floortype
        switch (this.floorType) {
            case FloorType.LOWER:
                roomIDs = LowerRoomIDs;
            break;
            case FloorType.MIDDLE:
                roomIDs = MidRoomIDs;
            break;
            case FloorType.UPPER:
                roomIDs = UpperRoomIDs;
            break;
        }

        for (var i in roomIDs) {
            for (var r in AllRooms) {
                if (RoomIDs[AllRooms[r].id] == roomIDs[i]) {
                    AllRooms[r].init();
                    rooms.push(AllRooms[r]);
                }
            }
        }

        return rooms;
    }

    findTexture() {
        switch (this.floorType) {
            case FloorType.LOWER:
                return PIXI.loader.resources[ImageURLS.HOME_LOWER_DIAGRAM].texture;
            break;
            case FloorType.MIDDLE:
                return PIXI.loader.resources[ImageURLS.HOME_MID_DIAGRAM].texture;
            break;
            case FloorType.UPPER:
                return PIXI.loader.resources[ImageURLS.HOME_UPPER_DIAGRAM].texture;
            break;
        }
    }
}