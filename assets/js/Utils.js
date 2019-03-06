function lightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

const generateCircleTexture = (renderer, radius, color) => {
    const gfx = new PIXI.Graphics();
    const tileSize = radius * 3;
    const texture = PIXI.RenderTexture.create(tileSize, tileSize);
  
    gfx.beginFill(color);
    gfx.drawCircle(tileSize / 2, tileSize / 2, radius);
    gfx.endFill();

    let dropShadowFilter = new PIXI.filters.DropShadowFilter();
    dropShadowFilter.color = 0x000020;
    dropShadowFilter.quality = 10;
    dropShadowFilter.alpha = 0.5;
    dropShadowFilter.blur = 3;
    dropShadowFilter.distance = 10;

    gfx.filters = [ dropShadowFilter ];
  
    renderer.render(gfx, texture);
  
    return texture;
  }