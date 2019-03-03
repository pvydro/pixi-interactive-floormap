var FloorType = {
    LOWER: 0,
    MIDDLE: 1,
    UPPER: 2
}

class HomeFloor {
    constructor(floorType) {
        this.floorType = floorType;
        this.waypoints = [];
        this.rooms = [];

        this.init();
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

        let roomIDKeys = Object.keys(RoomIDs);

        for (var i in roomIDKeys) {
            for (var r in AllRooms) {
                if (AllRooms[r].id == roomIDKeys[i]) {
                    rooms.push(AllRooms[r]);
                }
            }
        }

        return rooms;
    }
}