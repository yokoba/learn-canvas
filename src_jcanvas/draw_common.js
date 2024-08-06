'use strict';

const $canvas = $('#canvas');
let window_height = window.innerHeight - 40;
let window_width = window.innerWidth - 40;

(() => {
    const resizeWindow = () => {
        window_height = window.innerHeight - 40;
        window_width = window.innerWidth - 40;
        $canvas.prop({ width: window_width, height: window_height });
    };
    window.onresize = resizeWindow;
    resizeWindow();

    $canvas.drawLayers();
})();
