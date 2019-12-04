import Sprite from '../libs/Sprite';
import LayoutManager from '../libs/LayoutManager';

class MainStage extends Sprite {
    constructor() {
        super();
        window.main = this;
        this.title = this.addChild(new PIXI.Text("Hello World!", { fill: "white" }));
        this.title.anchor.set(0.5);

        new TWEEN.Tween(this.title.scale)
            .to({ x: 1.1, y: 1.1 }, 1000)
            .repeat(1000)
            .yoyo(true)
            .onUpdate(obj => console.log(obj))
            .start();
    }

    onResize() {
        const w = LayoutManager.width, h = LayoutManager.height;

        if (w > h) {
        } else {

        }
    }
}

export default MainStage;