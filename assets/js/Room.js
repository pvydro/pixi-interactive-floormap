var RoomIDs = {
    THEATER: "Theater",
    GUEST_BED: "Guest Bedroom",
    GUEST_BATHROOM: "Guest Bathroom",
    SITUATION_ROOM: "Situation Room",
    POOL: "Pool",
}

var LowerRoomIDs = [
    RoomIDs.THEATER, RoomIDs.GUEST_BED,
    RoomIDs.SITUATION_ROOM, RoomIDs.POOL
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
        
        switch (parsedID) {
            case RoomIDs.THEATER:
                newWaypoints.push(new Waypoint(-22.8, -1.75, parsedID));
            break;
            case RoomIDs.GUEST_BED:
                newWaypoints.push(new Waypoint(-2.7, 11, parsedID));
            break;
            case RoomIDs.SITUATION_ROOM:
                newWaypoints.push(new Waypoint(13.6, -7.6, parsedID));
            break;
            case RoomIDs.POOL:
                newWaypoints.push(new Waypoint(-28, 13, parsedID));
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