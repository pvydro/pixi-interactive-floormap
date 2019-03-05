var SceneManager = {
    homeScene: new PIXI.Container(),
    currentScene: undefined,

    Scenes: {
        HOME: 0
    },

    currentScene: undefined,

    enterScene: function(sceneID) {
        // Find scene based on ID
        let newScene = undefined;
        switch (sceneID) {
            case this.Scenes.HOME:
                newScene = this.homeScene;
            break;
        }

        // Apply new scene to stage
        this.currentScene = newScene;
        Application.stage.addChild(newScene);
        App.resizeAll();
    },

    initializeScenes: function() {
        this.homeScene.addChild(createHomeDiagram());
        HomeDiagram.addChild(WaypointManager.container);
    }
}