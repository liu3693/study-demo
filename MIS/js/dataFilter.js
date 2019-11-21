import {sourceData} from "./ife31data.js";

function getData() {
    //根据选项获取数据
    let $regions = $('#region-wrapper label input');
    let $products = $('#product-wrapper label input');
    let selectedRegions = []; //勾选地区
    let selectedProducts = []; //勾选商品
    let selectedData = []; //筛选后数据
    let $selectedRegions = $regions.filter(':checked');
    let $selectedProducts = $products.filter(':checked');
    for (let i = 0; i < $regions.length - 1; i++) {
        selectedRegions.push($selectedRegions.eq(i).attr('value'));
    }
    for (let i = 0; i < $products.length - 1; i++) {
        selectedProducts.push($selectedProducts.eq(i).attr('value'));
    }

    for (let i = 0; i < sourceData.length; i++) {
        if (selectedRegions.includes(sourceData[i].region) && selectedProducts.includes(sourceData[i].product)) {
            selectedData.push(sourceData[i])
        }
    }
    return selectedData
}

export {getData}