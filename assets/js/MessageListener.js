$(document).ready(function() {console.log("Ugh");});

window.addEventListener("message", function(e) {

    var clickedID = String(e.data).toUpperCase();;
    var allRoomIDs = Object.values(RoomIDs);
    var matchedID = undefined;
    // Find the matched ID
    for (var i in allRoomIDs) {
        let iteratedID = allRoomIDs[i].toUpperCase();
        if (iteratedID == clickedID) {
            matchedID = allRoomIDs[i];
        }
    }

    showShowcasePage(window.btoa(matchedID));
}, false);