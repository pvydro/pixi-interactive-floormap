var WaypointManager = {
  allWaypoints: [],
  container: new PIXI.Container(),

  update: function() {
    console.log("UPdateing")
  },

  addWaypoint: function(waypoint) {
    this.allWaypoints.push(waypoint);
    this.container.addChild(waypoint);
  }
}