import {sourceData} from "./ife31data.js";

function tableHeader($table) {
    // 渲染表头
    let $regionSelectArr = $('#region-wrapper label input[state=true]');
    let $productSelectArr = $('#product-wrapper label input[state=true]');
    let titles = [];
    if ($regionSelectArr.length === 1 && $productSelectArr.length !== 1){
        titles = ['地区', '商品', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }else {
        titles = ['商品', '地区', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }

    let $tr = $('<tr></tr>');
    for (let i = 0; i < titles.length; i++) {
        $tr.append($('<th></th>').text(titles[i]));
    }
    $table.prepend($tr);
}

function tableData($table, data) {
    // 渲染数据
    let a1 = $table.find('th:first').text();
    let sortMethod = function (keyName) {
        return function (obj1, obj2) {
            let value1 = obj1[keyName];
            let value2 = obj2[keyName];
            if (value1 < value2) {
                return 1
            }else if (value1 > value2) {
                return -1
            }else return 0
        }
    };
    //对数据排序,并加入表格
    if (a1 === '商品') {
        data.sort(sortMethod('product'));
        for (let i = 0; i < data.length; i++) {
            let $tr = $('<tr></tr>');
            $tr.prepend($('<td></td>').text(data[i].product));
            $tr.append($('<td></td>').text(data[i].region));
            for (let j = 0; j < data[i].sale.length; j++) {
                $tr.append($('<td></td>').text(data[i].sale[j]));
            }
            $table.append($tr);
        }
    }else if (a1 === '地区') {
        data.sort(sortMethod('region'));
        for (let i = 0; i < data.length; i++) {
            let $tr = $('<tr></tr>');
            $tr.append($('<td></td>').text(data[i].region));
            $tr.prepend($('<td></td>').text(data[i].product));
            for (let j = 0; j < data[i].sale.length; j++) {
                $tr.append($('<td></td>').text(data[i].sale[j]));
            }
            $table.append($tr);
        }
    }

    //合并第一列同一项目
    if (a1 === '地区') {
        let regionArr = [];
        data.forEach(function (each) {
            regionArr.push(each.region);
        });
        regionArr = [...new Set(regionArr)];
        for (let i = 0; i < regionArr.length; i++) {
            let $regionTd = $table.find(`td:contains(${regionArr[i]})`);
            let rowspan = $regionTd.length;
            $regionTd.first().attr('rowspan',rowspan);
            $regionTd.remove(':gt(0)');
        }
    }else if (a1 === '商品') {
        let productArr = [];
        data.forEach(function (each) {
            productArr.push(each.product);
        });
        productArr = [...new Set(productArr)];
        //console.log(productArr)
        for (let i = 0; i < productArr.length; i++) {
            let $productTd = $table.find(`td:contains(${productArr[i]})`);
            let rowspan = $productTd.length;
            $productTd.first().attr('rowspan',rowspan);
            $productTd.remove('td:gt(0)');
        }
    }
}

function formTable(data) {
    //渲染新表格
    let $table = $('<table></table>');
    tableHeader($table);
    //渲染表头
    tableData($table,data);
    //渲染数据
    let $tableWrapper = $('#table-wrapper');
    $tableWrapper.empty();
    $tableWrapper.append($table);
    //替换表格
}

function originTable() {
    //原始数据表格
    let $table = $('<table></table>');
    tableHeader($table);
    tableData($table,sourceData);
    return $table
}

export {tableHeader,tableData,formTable,originTable}