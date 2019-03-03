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
    }

    populateSideNav() {

    }

    init() {
        // Find all rooms
        this.rooms = findRooms();

        // Populate the side nav
        
    }

    findRooms() {
        let rooms = [];
        switch (this.floorType) {
            case FloorType.LOWER:
            
            break;
            case FloorType.MIDDLE:
            break;
            case FloorType.UPPER:
            break;
        }
    }
}