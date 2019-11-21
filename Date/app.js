function startTime() {
    let theDate = new Date();
    let year = theDate.getFullYear();
    let month = theDate.getMonth()+1;
    let date = theDate.getDate();
    let day = theDate.getDay();
    let h = theDate.getHours();
    let m = theDate.getMinutes();
    let s = theDate.getSeconds();

    function checkTime(i){
        if (i < 10) {
            i = '0'+i;
            return i
        }else {
            return i
        }

    }

    function week(i){
        switch (i) {
            case 0:
                return '星期日'
            case 1:
                return '星期一'
            case 2:
                return '星期二'
            case 3:
                return '星期三'
            case 4:
                return '星期四'
            case 5:
                return '星期五'
            case 6:
                return '星期六'
        }
    }

    function wrap(){
        year = year + '年';
        month = checkTime(month) + '月';
        date = checkTime(date) + '日';
        day = week(day);
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        return year+month+date+day+' '+h+':'+m+':'+s;
    }

    function output() {
        let str = wrap();
        let p = document.getElementById('clock');
        p.innerHTML = str;
    }

    output();
}

window.onload = function (){
    setInterval(startTime,500);
}