import Sprite from '../libs/Sprite';

class MainStage extends Sprite {
    constructor() {
        super();
        window.main = this;
        this.title = this.addChild(new PIXI.Text("Hello World!", { fill: "white" }));
        this.title.anchor.set(0.5);
    }
}

export default MainStage;