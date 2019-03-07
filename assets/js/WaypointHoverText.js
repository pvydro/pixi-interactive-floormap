var WaypointHoverText = {
    element: '#waypoint-hover-text',
    hovering: false,

    followMouse() {
        $(document).on('mousemove', function(e){
            $(this.element).css({
               "left": e.pageX + 10,
               "top": e.pageY,
               "transform": "translateY(-50%)",
            });
        }.bind(this));
    },

    hover(text) {
        if (this.hovering) return;
        this.hovering = true;

        $(this.element).addClass('active');
        $(this.element + " p").text("> " + text);
    },

    unhover() {
        this.hovering = false;

        $(this.element).removeClass('active');
    }
}