window.onload = function(){
    let textId='';
    document.getElementById('radio-a').onclick =function () {
        textId = 'num-a'
    };
    document.getElementById('radio-b').onclick = function () {
        textId = 'num-b'
    };
    const btns = document.getElementsByTagName('button');
// is数字
    btns[0].addEventListener("click", isNum);
    function isNum() {
        let text = document.getElementById(textId).value;
        let p=document.getElementById('result');
        if (!Number.isNaN(Number(text))){
            p.innerHTML = 'true';
            return true;
        }else {
            p.innerHTML = 'false';
            return false;
        }
    }

// 四舍五入
    btns[1].addEventListener('click',round);
    function round() {
        if (isNum('num-a')&&isNum('num-b')) {
            let numA = Number(document.getElementById('num-a').value);
            let fix = Number(document.getElementById('num-b').value);
            let result = numA.toPrecision(fix+1);// result is string
            let p = document.getElementById('result');
            p.innerHTML = result;
        }

    }

// 绝对值
    btns[2].addEventListener('click',abs);
    function abs() {
        if (isNum(textId)){
            let num = Number(document.getElementById(textId).value);
            let result = Math.abs(num);
            let p = document.getElementById('result');
            p.innerHTML = result;
        }
    }

//
};
