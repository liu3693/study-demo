const token = '5mQBGoZBVMVKfR3M';
const long = 116.2743;
const la = 39.8937;
const realtime_api = `https://api.caiyunapp.com/v2/${token}/${long},${la}/realtime.jsonp`;
const daily_api = `https://api.caiyunapp.com/v2/${token}/${long},${la}/daily.jsonp`;

$(function () {
    clock();
    setInterval(clock, 500);
    //立即执行一次
    $.ajax({
        url: realtime_api,
        success: function (data) {
            temNow(data);
        },
        dataType: 'jsonp',
        jsonp: 'callback'
    });
    //每半小时更新
    setInterval(function () {
        $.ajax({
            url: realtime_api,
            success: function (data) {
                temNow(data);
            },
            dataType: 'jsonp',
            jsonp: 'callback'
        });
    }, 3600 * 500);
    //立即执行一次
    $.ajax({
        url: daily_api,
        success: function (data) {
            temMaxMin(data);
        },
        dataType: 'jsonp',
        jsonp: 'callback'
    });
    //每日0点更新
    setInterval(function () {
        let d = new Date();
        let h = d.getHours();
        if (h === 0) {
            $.ajax({
                url: daily_api,
                success: function (data) {
                    temMaxMin(data);
                },
                dataType: 'jsonp',
                jsonp: 'callback'
            });
        }
    }, 3600000)

});

function clock() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let day = d.getDay();
    switch (day) {
        case 1:
            day = '周一';
            break;
        case 2:
            day = '周二';
            break;
        case 3:
            day = '周三';
            break;
        case 4:
            day = '周四';
            break;
        case 5:
            day = '周五';
            break;
        case 6:
            day = '周六';
            break;
        case 7:
            day = '周日';
            break;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    let clock = {};
    clock.time = hours + ':' + minutes;
    clock.date = month + '月' + date + '日 ' + day;
    //console.log(month,date,day);

    $('.time p').text(clock.time);
    $('.date p').text(clock.date);
}

function temNow(data) {
    if (data.result.status === 'ok') {
        let t = data.result.temperature;
        let status = data.result.skycon;

        switch (status) {
            case 'CLEAR_DAY':
                status = '晴';
                $('.img img').attr('src', './src/sunny.png');
                break;
            case 'CLEAR_NIGHT':
                status = '晴';
                $('.img img').attr('src', './src/sunny.png');
                break;
            case 'PARTLY_CLOUDY_DAY':
                status = '多云';
                $('.img img').attr('src', './src/cloudy.png');
                break;
            case 'PARTLY_CLOUDY_NIGHT':
                status = '多云';
                $('.img img').attr('src', './src/cloudy.png');
                break;
            case 'CLOUDY':
                status = '阴';
                $('.img img').attr('src', './src/cloudy.png');
                break;
            case 'WIND':
                status = '大风';
                $('.img img').attr('src', './src/wind.png');
                break;
            case 'HAZE':
                status = '雾霾';
                $('.img img').attr('src', './src/dehaze.png');
                break;
            case 'RAIN':
                status = '雨';
                $('.img img').attr('src', './src/rain.png');
                break;
            case 'SNOW':
                status = '雪';
                $('.img img').attr('src', './src/snow.png');
                break;
        }
        $('.progress progress').attr('value', t);
        $('.temperature p').text(Math.floor(t) + '°C');
        $('.status p').text(status)
    }
}

function temMaxMin(data) {
    let max = data.result.daily.temperature[0].max;
    let min = data.result.daily.temperature[0].min;
    max = Math.floor(max);
    min = Math.floor(min);
    $('.progress progress').attr('max', max);
    $('.min').text(min + '°C');
    $('.max').text(max + '°C');

    // 未来天气
    let dayArr = [];
    let statusArr = [];
    let temArr = [];

    // 得到dayArr
    let d = new Date();
    let day = d.getDay() + 1;
    for (let i = 0; i < 4; i++) {
        switch (day) {
            case 1:
                dayArr.push('周一');
                break;
            case 2:
                dayArr.push('周二');
                break;
            case 3:
                dayArr.push('周三');
                break;
            case 4:
                dayArr.push('周四');
                break;
            case 5:
                dayArr.push('周五');
                break;
            case 6:
                dayArr.push('周六');
                break;
            case 7:
                dayArr.push('周日');
                break;
        }
        if (day === 7) {
            day = 1;
        } else {
            day += 1;
        }
    }
    // 得到temArr
    for (let i = 0; i < 4; i++) {
        let max = data.result.daily.temperature[i + 1].max;
        let min = data.result.daily.temperature[i + 1].min;
        let max_min = Math.floor(max) + '/' + Math.floor(min) + '°C';
        temArr.push(max_min);
    }
    // 得到statusArr
    for (let i = 0; i < 4; i++) {
        let status = data.result.daily.skycon[i + 1];
        switch (status) {
            case 'CLEAR_DAY':
                statusArr.push('sunny');
                break;
            case 'CLEAR_NIGHT':
                statusArr.push('sunny');
                break;
            case 'PARTLY_CLOUDY_DAY':
                statusArr.push('cloudy');
                break;
            case 'PARTLY_CLOUDY_NIGHT':
                statusArr.push('cloudy');
                break;
            case 'CLOUDY':
                statusArr.push('cloudy');
                break;
            case 'WIND':
                statusArr.push('wind');
                break;
            case 'HAZE':
                statusArr.push('dehaze');
                break;
            case 'RAIN':
                statusArr.push('rain');
                break;
            case 'SNOW':
                statusArr.push('snow');
                break;
        }
    }

    for (let i = 0; i < 4; i++) {
        $('.future-date').eq(i).text(dayArr[i])
    }
    for (let i = 0; i<4; i++){
        $('.future-weather .img img').eq(i).attr('src',`./src/${statusArr[i]}.png`);
    }
    console.log(statusArr)

}

