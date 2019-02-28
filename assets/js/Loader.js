var Loader = {
    loadAll: function(callback) {
        PIXI.loader.add(Object.values(ImageURLS))
        .load(callback);
    },
}