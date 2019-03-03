var FloorType = {
    LOWER: "Lower Level",
    MIDDLE: "Middle Level",
    UPPER: "Upper Level"
}

class HomeFloor {
    constructor(floorType) {
        this.floorType = floorType;
        this.waypoints = [];
        this.rooms = [];

        this.findRooms();
    }

    populateSideNav() {
        $('#side-nav .nav-buttons').empty();
        // Loop through all rooms and create a button for each
        for (var i in this.rooms) {
            let roomObj = this.rooms[i];
            let roomTitle = RoomIDs[roomObj.id];

            // Create & append element
            let buttonElement = "<a class='nav-link'> " + roomTitle + "</a>";
            $('#side-nav .nav-buttons').append(buttonElement);
        }
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
                    rooms.push(AllRooms[r]);
                }
            }
        }

        return rooms;
    }
}