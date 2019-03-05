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
  }
}