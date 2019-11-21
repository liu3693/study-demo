$(function () {
    let $start_btn = $('#start_btn');
    let $reset_btn = $('#reset_btn');
    let temp = [0,0];
    let output = [0,0];
    let interval;
    $start_btn.on('click',function () {
        $start_btn.toggleClass('start');
        $start_btn.toggleClass('stop');
        if ($start_btn.attr('class') === 'button stop') {
            let initDate = new Date();
            let initMs = initDate.getTime();
            interval = setInterval(function () {
                let passTime = getTime(initMs);
                let m = passTime[0];
                let s = passTime[1];
                output = [temp[0]+m, temp[1]+s];
                formatOutput(output);
            },500)
        }else if ($start_btn.attr('class') === 'button start') {
            temp = output;
            clearInterval(interval);
        }
    });

    $reset_btn.on('click',function () {
        clearInterval(interval);
        $start_btn.attr('class','button start');
        temp = [0,0];
        output = [0,0];
        formatOutput(output)
    });

    drawDot();

});

// 开始计时
function getTime(initMs) {
    let currentDate = new Date();
    let currentMs = currentDate.getTime();
    let m = Math.floor((currentMs-initMs)/60000);
    let s = Math.floor((currentMs-initMs)%60000/1000);
    return [m,s]
    // m,s is Number
}

// 分、秒格式化输出
function formatOutput(temp) {
    let m = temp[0];
    let s = temp[1];
    if (m === 0) {
        m = '00';
    }else if (m > 0 && m < 10) {
        m = '0'+m;
    }else if (m > 10) {
        m = m.toString();
    }
    if (s>=60){
        s = s-60;
        if (s === 0 || s < 10) {
            s = '0'+s;
        }else if (s > 10) {
            s = s.toString();
        }
    }else if (s < 60) {
        if (s === 0 || s < 10) {
            s = '0'+s;
        }else if (s > 10) {
            s = s.toString();
        }

    }

    // m,s is String
    $('#minutes>p').text(m);
    $('#seconds>p').text(s);

}

function drawDot() {
    let canvas = document.getElementById('canvas');
    canvas.width = 40;
    canvas.height = 201;
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(20,67,8,0,Math.PI*2,true);
    ctx.arc(20,134,8,0,Math.PI*2,true)
    ctx.fill();
}
//