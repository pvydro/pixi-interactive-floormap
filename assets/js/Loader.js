var Loader = {
    loadAll: function() {
        PIXI.loader.add(Object.keys(ImageURLS));
    }
}