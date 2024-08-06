'use strict';

// const text = new Text(0, 0, '', 'black', 'text', 'textGroup');

// $canvas.mousemove(function (e) {
//     text.x = e.pageX;
//     text.y = e.pageY;

//     const offset = $canvas.offset();

//     text.text = `x: ${e.pageX - offset.left}, y: ${e.pageY - offset.top}`;
//     text.draw();
// });

// const img = new Image();
// img.src = './DALL·E-2024-08-06-15.38.22.webp';
// img.onload = function () {
//     $('#img').src = img.src;
//     console.log('Image width:', img.width);
//     console.log('Image height:', img.height);

//     $canvas.scaleCanvas({
//         scaleX: window_width / img.width,
//         scaleY: window_height / img.height,
//     });
//     $canvas
//         .drawImage({
//             layer: true,
//             name: 'backGroundImage',
//             source: './DALL·E-2024-08-06-15.38.22.webp',
//             x: 0,
//             y: 0,
//             width: img.width,
//             height: img.height,
//             opacity: 1,
//         })
//         .restoreCanvas();
//     $canvas.drawLayers();
//     console.log('draw back ground');
// };

// let sq1;
// // const po = new Square(0, 0, 100, 'black', 'bg', 'test', 0.4, false);
// sq1 = new Square(100, 100, 100, 'red', 'layer1', 'layerGroup1', 0.4, false);

// $canvas
//     .translateCanvas({
//         translateX: 100,
//         translateY: 100,
//     })
//     .restoreCanvas();

// // $canvas.removeLayer('layer1').drawLayers();
// // $canvas.removeLayerGroup('layerGroup1').drawLayers();
// console.log('draw squire');

// setTimeout(() => {
//     $canvas.moveLayer('layer1', 1).drawLayers();
//     console.log('index change');
// }, 2000);

$(function () {
    let scale = 1; // 初期スケール

    // 四角形を描画する関数
    function drawRect() {
        $canvas.clearCanvas(); // キャンバスをクリア
        $canvas.saveCanvas(); // 現在の状態を保存
        $canvas.scaleCanvas({
            scale: scale,
        });
        $canvas.drawRect({
            fillStyle: '#36c',
            x: 250,
            y: 250,
            width: 100,
            height: 100,
        });
        $canvas.restoreCanvas(); // 保存した状態を復元
    }

    // マウスホイールイベントリスナー
    $canvas.on('wheel', function (event) {
        if (event.originalEvent.deltaY < 0) {
            scale *= 1.1; // 拡大
        } else {
            scale /= 1.1; // 縮小
        }
        drawRect(); // 再描画
    });

    drawRect(); // 初期描画
});
