function start() {
    let year = document.getElementById('year-select').value;
    let month = document.getElementById('month-select').value-1;
    let date = document.getElementById('day-select').value;
    let h = document.getElementById('hour-select').value;
    let m = document.getElementById('minute-select').value;
    let s = document.getElementById('second-select').value;

    let targetDate = new Date(year,month,date,h,m,s);
    let today = new Date();
    let needMs = today.getTime() - targetDate.getTime();
    // console.log(needMs)

    function isOver() {
        if (needMs > 0) {
            return '已经过去'
        }else if (needMs < 0) {
            return '还有'
        }
    }
    
    function toDate() {
        let days = Math.floor(needMs/(24*3600*1000));
        let hours = Math.floor((needMs%(24*3600*1000))/3600*1000);
        let minutes = Math.floor(((needMs%(24*3600*1000))%3600*1000)/60*1000)
        let seconds = Math.round((((needMs%(24*3600*1000))%3600*1000)%60*1000)/1000)
        return `${days}天${hours}小时${minutes}分钟${seconds}秒`
    }


}

window.onload = function () {
    let selects = document.getElementsByTagName('select');
    for (let i = 0; i < selects.length; i++) {
        selects[i].onchange = function () {
            let year = document.getElementById('year-select').value;
            let month = document.getElementById('month-select').value-1;
            let date = document.getElementById('day-select').value;
            let h = document.getElementById('hour-select').value;
            let m = document.getElementById('minute-select').value;
            let s = document.getElementById('second-select').value;

            let targetDate = new Date(year,month,date,h,m,s);
            let today = new Date();
            let needMs = today.getTime() - targetDate.getTime();

            let p = document.getElementById('result-wrapper')
            let char1 = isOver(needMs);
            let char2 = toDate(needMs);
            p.innerHTML = `距离${year}年${month}月${date}日 ${h}：${m}：${s},${char1}${char2}`
        }
    }
    function isOver(needMs) {
        if (needMs > 0) {
            return '已经过去'
        }else if (needMs < 0) {
            return '还有'
        }
    }
    function toDate(needMs) {
        needMs = Math.abs(needMs);
        let days = Math.floor(needMs/(24*3600*1000));
        let temp1 = needMs%(24*3600*1000);
        let hours = Math.floor(temp1/(3600*1000));
        let temp2 = temp1%(3600*1000);
        let minutes = Math.floor(temp2/(60*1000));
        let temp3 = temp2%(60*1000);
        let seconds = Math.round(temp3/1000);
        return `${days}天${hours}小时${minutes}分钟${seconds}秒`
    }
}