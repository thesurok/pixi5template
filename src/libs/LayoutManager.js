class LayoutManager {
    constructor() {
        this.eventEmitter = new PIXI.utils.EventEmitter();

        this.width = 0;
        this.height = 0;
    }

    handleResize(w = window.innerWidth, h = window.innerHeight) {
        if (w === this.width && h === this.height) return;

        this.width = w;
        this.height = h;

        Game.app.renderer.resize(w, h);

        Game.onResize();

        this.eventEmitter.emit("resize", { width: this.width, height: this.height });
    }

    on(e, cb, context) {
        this.eventEmitter.on(e, cb, context);
    }

    once(e, cb, context) {
        this.eventEmitter.once(e, cb, context);
    }

    off(e, cb, context) {
        this.eventEmitter.off(e, cb, context);
    }
}

export default new LayoutManager();