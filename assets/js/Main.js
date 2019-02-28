var application;
var applicationStage;
var rendererOptions

// App object for updating & rendering
const App = {
    initialize: function() {
        // Assign rendererOptions
        let mapCanvas = document.getElementById("map-canvas");
        rendererOptions = {
            view: mapCanvas,
            backgroundColor: 0xeff4f5
        }

        // Create application
        application = new PIXI.Application(rendererOptions);
        applicationStage = new PIXI.Container();

        // Set initial scene
        
    },

    update: function() {
    },

    render: function() {
        // Updates
        this.update();

        // Renders stage
        application.renderer.render(applicationStage);

        // Calls next render
        requestAnimationFrame(this.render.bind(this));
    }
}

$(document).ready(function() {
    // Initialize and create PIXI application
    App.initialize();

    // Initial render
    App.render();
});