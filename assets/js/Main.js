var Application = undefined;

// App object for updating & rendering
var App = {};
App.update = function() {
    if (!SceneManager.currentScene) {
        return;
    }

    // Get all entities and update them
    var allEntities = SceneManager.currentScene.children;
    for (var i in allEntities) {
        let entity = allEntities[i];
        
        if (entity.update !== null) {
            entity.update();
        }
    }
}

App.render = function() {
    // Updates
    this.update();

    // Renders stage
    Application.renderer.render(Application.stage);

    // Calls next render
    requestAnimationFrame(this.render.bind(this));
}

App.resizeAll = function() {
    // Resize all entities in current scene
    var allEntities = SceneManager.currentScene.children;
    for (var i in allEntities) {
        let entity = allEntities[i];
        
        if (entity.resize !== null) {
            entity.resize();
        }
    }

}

App.initialize = function() {
    // Assign rendererOptions
    let mapCanvas = document.getElementById("map-canvas");
    let rendererOptions = {
        view: mapCanvas,
        backgroundColor: 0xeff4f5
    }

    // Create application
    Application = new PIXI.Application(rendererOptions);

    // Initialize scenes & set initial scene
    SceneManager.initializeScenes();
    SceneManager.enterScene(SceneManager.Scenes.HOME);


    App.render();
}

document.addEventListener('DOMContentLoaded', function() {
    Loader.loadAll(App.initialize);
});

window.addEventListener('resize', App.resizeAll)