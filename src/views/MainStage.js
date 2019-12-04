import Sprite from '../libs/Sprite';
import LayoutManager from '../libs/LayoutManager';

class MainStage extends Sprite {
    constructor() {
        super();
        window.main = this;
        this.title = this.addChild(new PIXI.Text("Hello World!", { fill: "white" }));
        this.title.anchor.set(0.5);

        const tw = new TWEEN.Tween(this.title.scale);
        tw.to({ x: 1.2, y: 1.2 }, 1000);
        tw.onUpdate(obj => console.log(obj.x));
        tw.start();
    }

    onResize() {
        const w = LayoutManager.width, h = LayoutManager.height;

        if (w > h) {
        } else {

        }
    }

    tick(delta) {
        // this.title.x += delta;
    }
}

export default MainStage;