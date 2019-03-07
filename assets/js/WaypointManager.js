var WaypointManager = {
  allWaypoints: [],
  container: new PIXI.Container(),

  update: function() {
    for (var i in this.allWaypoints) {
      let w = this.allWaypoints[i];

      w.update();
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
    console.log("Cleared waypoints");
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
  }
}