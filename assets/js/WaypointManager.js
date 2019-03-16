var WaypointManager = {
  allWaypoints: [],
  container: new PIXI.Container(),

  update: function() {
    let anyHover = false;
    for (var i in this.allWaypoints) {
      let w = this.allWaypoints[i];

      if (TinkPointer.hitTestSprite(w)) {
        WaypointHoverText.hover(w.showcaseID);
        anyHover = true;
      }

      w.update();
    }

    if (!anyHover && WaypointHoverText.hovering) {
      WaypointHoverText.unhover();
    }
  },

  addWaypoint: function(waypoint) {
    this.allWaypoints.push(waypoint);
    this.container.addChild(waypoint);
  },

  noOthersClicked: function(currentWaypoint) {
    for (var i in this.allWaypoints) {
      let w = this.allWaypoints[i];
      if (w != currentWaypoint) {
        if (w.currentState == w.State.CLICKING
          || w.currentState == w.State.CLICKED) {
            return false;
        }
      }
    }
    return true;
  },

  clearWaypoints: function() {
    // Clear array
    this.allWaypoints = [];

    // Remove all waypoints from container
    var toBeRemoved = [];
    for (var i in this.container.children) {
      toBeRemoved.push(this.container.children[i]);
    }
    for (var i in toBeRemoved) {
      this.container.removeChild(toBeRemoved[i]);
    }
  },

  goToWaypoint: function(ButtonID) {
    HomeDiagram.resetPosition();

    let roomValues = Object.values(RoomIDs);
    let roomKeyIndex = 0;

    // Find key index
    for (var i in roomValues) {
      if (roomValues[i] == ButtonID) {
        roomKeyIndex = i;
      }
    }

    // Find waypoint based on key index
    let chosenWaypoint = this.allWaypoints[0];
    for (var i in this.allWaypoints) {
      if (this.allWaypoints[i].showcaseID == roomValues[roomKeyIndex]) {
        chosenWaypoint = this.allWaypoints[i];
      }
    }
    
    HomeDiagram.position.x = HomeDiagram.position.x - chosenWaypoint.position.x;
    HomeDiagram.position.y = HomeDiagram.position.y - chosenWaypoint.position.y;
  }
}
