const resizeThrottler = _ => {
    const throttle = (type, name, obj) => {
        obj = obj || window;
        let running = false;
        const func = _ => {
            if (running) { return; }
            running = true;
            requestAnimationFrame(_ => {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle("resize", "optimizedResize");

    window.addEventListener("optimizedResize", function () {
        LayoutManager.handleResize();
    });
};

Game.preloadAssets([
    { name: 'knight', path: './assets/images/knight.png' }
]);

Game.init();

Game.on("preloadComplete", _ => {
    resizeThrottler();
    LayoutManager.handleResize();
});
