import {sourceData} from "./ife31data.js";

if (SVG.supported) {
    var c2 = SVG('c2');
} else {
    alert('SVG not supported')
}

drawBarChart(sourceData);

function drawBarChart(data) {
    c2.size(600, 400);
    const lengthx = 500;
    const lengthy = 300;
    const barWidth = 12;
    const barSpace = 25;
    const barColor = '#cccccc';
    let max = 0;
    for (let i = 0; i < data.length; i++) {
        let a = Math.max(...(data[i].sale));
        max = a > max ? a : max;
    }
    const toPx = 300 / max;

    //x,y轴
    let ox = 50;
    let oy = 350;
    let linex = c2.line(ox, oy, ox + lengthx, oy).stroke({width: 3});
    let liney = c2.line(ox,oy,ox,oy-lengthy).stroke({width:3});
}