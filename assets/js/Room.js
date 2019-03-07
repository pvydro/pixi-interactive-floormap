var RoomIDs = {
    THEATER: "Theater",
    GUEST_BED: "Guest Bedroom",
    GUEST_BATHROOM: "Guest Bathroom",
    SITUATION_ROOM: "Situation Room",
    POOL: "Pool",
    BUNK_ROOM: "Bunk Room",
    GREAT_ROOM: "Great Room",
    GEAR_ROOM: "Gear Room",
    SKYBRIDGE: "Skybridge",
    LIBRARY: "Library",
    KITCHEN: "Kitchen",
    ENTRYWAY: "Entryway",
    DECK: "Deck"
}

var LowerRoomIDs = [
    RoomIDs.THEATER, RoomIDs.GUEST_BED,
    RoomIDs.SITUATION_ROOM, RoomIDs.POOL
]
var MidRoomIDs = [
    RoomIDs.GREAT_ROOM, RoomIDs.GEAR_ROOM,
    RoomIDs.SKYBRIDGE, RoomIDs.LIBRARY,
    RoomIDs.KITCHEN, RoomIDs.ENTRYWAY,
    RoomIDs.DECK

]
var UpperRoomIDs = [
    RoomIDs.BUNK_ROOM
]

var AllRooms = [];

class Room {
    constructor(roomID) {
        this.id = roomID;
    }

    init() {
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
        let wp = undefined;
        
        switch (parsedID) {
            // Lower
            case RoomIDs.THEATER: wp = new Waypoint(-22.8, -1.75, parsedID); break;
            case RoomIDs.GUEST_BED: wp = new Waypoint(-2.7, 11, parsedID); break;
            case RoomIDs.SITUATION_ROOM: wp = new Waypoint(13.6, -7.6, parsedID); break;
            case RoomIDs.POOL: wp = new Waypoint(-28, 13, parsedID); break;
            // Mid
            case RoomIDs.GREAT_ROOM: wp = new Waypoint(20, 2, parsedID); break;
            case RoomIDs.GEAR_ROOM: wp = new Waypoint(-17, -1, parsedID); break;
            case RoomIDs.SKYBRIDGE: wp = new Waypoint(-8, 1.2, parsedID); break;
            case RoomIDs.LIBRARY: wp = new Waypoint(3.5, 12, parsedID); break;
            case RoomIDs.KITCHEN: wp = new Waypoint(13.2, -4, parsedID); break;
            case RoomIDs.ENTRYWAY: wp = new Waypoint(-5, -7, parsedID); break;
            case RoomIDs.DECK: wp = new Waypoint(16, 14, parsedID); break;
            // Upper
            case RoomIDs.BUNK_ROOM: wp = new Waypoint(-25, -3, parsedID); break;
        }

        newWaypoints.push(wp);

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