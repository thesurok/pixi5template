class Sprite extends PIXI.Sprite {
    constructor(texture) {
        super();
        this.anchor.set(0.5);
        this.setTexture(texture);
    }

    setTexture(texture) {
        if (texture === undefined) {
            this.texture = PIXI.Texture.EMPTY;
        } else {
            this.texture = PIXI.Texture.from(texture);
        }
    }
}

export default Sprite;