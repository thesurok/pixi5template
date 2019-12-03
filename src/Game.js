import MainStage from './views/MainStage';
import LayoutManager from './libs/LayoutManager';

class Game {
    constructor() {
        this.emitter = new PIXI.utils.EventEmitter();
        this.app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    preloadAssets(assets) {
        if (Array.isArray(assets)) {
            for (let i = 0; i < assets.length; i++) {
                this.app.loader.add(assets[i].name, assets[i].path);

            }
        } else if (typeof assets === "object") {
            this.app.loader.add(assets.name, assets.path);
        }
    }

    init() {
        document.body.appendChild(this.app.view);

        this.app.view.style.position = "absolute";
        this.app.view.style.left = "0";
        this.app.view.style.top = "0";

        this.app.loader.load((p) => {
            //Entry point
            this.mainStage = this.app.stage.addChild(new MainStage());
            this.app.ticker.add(delta => {
                this.emit("tick", delta);
            });
            this.initListeners();
            this.emit("preloadComplete");
        })
    }

    initListeners() {
        LayoutManager.on("resize", this.onResize, this);
    }

    emit(event, a1, a2, a3, a4) {
        this.emitter.emit(event, a1, a2, a3, a4);
    }

    on(event, fn, context) {
        this.emitter.on(event, fn, context);
    }

    once(event, fn, context) {
        this.emitter.once(event, fn, context);
    }

    off(event, fn, context) {
        this.emitter.off(event, fn, context);
    }

    onResize() {
        this.mainStage.position.set(this.app.renderer.width / 2, this.app.renderer.height / 2);
    }
}

export default new Game();

