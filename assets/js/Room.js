var RoomIDs = {
    THEATER: "Theater",
    GUEST_BED: "Guest Bedroom",
    GUEST_BATHROOM: "Guest Bathroom",
    WINE_CELLAR: "Wine Cellar"
}

var LowerRoomIDs = [
    RoomIDs.THEATER, RoomIDs.GUEST_BED, RoomIDs.GUEST_BATHROOM,
    RoomIDs.WINE_CELLAR
]
var MidRoomIDs = [

]
var UpperRoomIDs = [
    
]

var AllRooms = [];

class Room {
    constructor(roomID) {
        this.id = roomID;
        this.waypoint = new Waypoint(this.roomID);
    }

    findFloorLevel() {
        if (LowerRoomIDs.indexOf(this.roomID) > -1) {
            return 0;
        } else if (MidRoomIDs.indexOf(this.roomID) > -1) {
            return 1;
        } else if (UpperRoomIDs.indexOf(this.roomID) > -1) {
            return 2;
        }
    }
}

function createAllRooms() {
    AllRooms = [];

    let allRoomIDs = Object.keys(RoomIDs);

    for (var i in allRoomIDs) {
        let id = allRoomIDs[i];
        let r = new Room(id);
        AllRooms.push(r);
    }

}