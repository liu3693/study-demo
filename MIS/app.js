import {getData} from "./js/dataFilter.js";
import {updateDisplay} from "./js/checkbox.js";
import {formTable,originTable} from "./js/table.js"
import {lineChart} from "./js/line.js";
import {intoEdit} from "./js/intoEdit.js";

$(function () {
    let $tableWrapper = $('#table-wrapper');
    let $regionWrapper = $('#region-wrapper');
    let $productWrapper = $('#product-wrapper');

    //checkbox 选择逻辑
    updateDisplay('region-wrapper');
    updateDisplay('product-wrapper');
    // 原始表格
    $tableWrapper.append(originTable());

    // 选择地区
    $regionWrapper.on('click', function () {
        formTable(getData())
    });
    $productWrapper.on('click', function () {
        formTable(getData())
    });

    // 鼠标hover编辑
    $('td').on('mouseenter',function () {
        // 加div
        if (Number($(this).text())) {
            $(this).append('<div class="edit" id="edit-button">编辑</div>');
            intoEdit();
        }
    });
    $('td').on('mouseleave',function () {
        // 去div
        $(this).children('.edit').remove();
    });





    //绘制图表
    let canvas = document.createElement('canvas');
    canvas.id = 'c1';
    let lineDiv = document.getElementById('line');
    lineDiv.appendChild(canvas);
    $tableWrapper.on('mouseover',function (ev) {
        if (ev.target.tagName === 'TD') {
            let tr = ev.target.parentNode;
            let td = tr.childNodes;
            let saleData = [];
            if (td.length === 13){
                for (let i=0;i<td.length;i++){
                    saleData.push(td[i].textContent);
                }
                saleData.splice(0,1)
            }else if (td.length === 14){
                for (let i = 0; i < td.length; i++) {
                    saleData.push(td[i].textContent);
                }
                saleData.splice(0,2)
            }
            let obj = {
                sale: saleData
            };

            lineChart.setData(obj);
            lineChart.draw('c1');
        }
    })
});
