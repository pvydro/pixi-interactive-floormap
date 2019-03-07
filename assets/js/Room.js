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
        this.waypoints = this.findWaypoints();
    }

    findFloorLevel() {
        if (LowerRoomIDs.indexOf(this.id) > -1) {
            return 0;
        } else if (MidRoomIDs.indexOf(this.id) > -1) {
            return 1;
        } else if (UpperRoomIDs.indexOf(this.id) > -1) {
            return 2;
        }
    }

    findWaypoints() {
        let parsedID = RoomIDs[this.id];
        let newWaypoints = [];

        console.log("ParsedID: " + parsedID)
        
        switch (parsedID) {
            case RoomIDs.THEATER:
                newWaypoints.push(new Waypoint(-22.8, -1.75, parsedID));
            break;
            case RoomIDs.GUEST_BED:
                newWaypoints.push(new Waypoint(-2.7, 11, parsedID));
            break;
            case RoomIDs.GUEST_BATHROOM:
                newWaypoints.push(new Waypoint(-5.35, 3, parsedID));
            break;
            case RoomIDs.WINE_CELLAR:
                newWaypoints.push(new Waypoint(10, -11.5, parsedID));
            break;
        }

        return newWaypoints;
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