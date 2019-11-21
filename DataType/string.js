window.onload = function () {
    let textId = '';
    document.getElementById('radio-a').onclick = function () {
        textId = 'str-a'
    };
    document.getElementById('radio-b').onclick = function () {
        textId = 'str-b'
    };
    const btns = document.getElementsByTagName('button');
    const p = document.getElementById('result');

    btns[0].addEventListener('click',getLength);
    btns[1].addEventListener('click',charAt3);
    btns[2].addEventListener('click',concat);
    btns[3].addEventListener('click',findFirstB);
    btns[4].addEventListener('click',findLastA);
    btns[5].addEventListener('click',getAtoB);
    btns[6].addEventListener('click',getLine);

// 长度
    function getLength() {
        let text = document.getElementById(textId).value;
        p.innerHTML = text.length;
    }

// 第三个字符
    function charAt3() {
        let text = document.getElementById(textId).value;
        p.innerHTML = text.charAt(2)
    }

// 拼接字符
    function concat() {
        let textA = document.getElementById('str-a').value;
        let textB = document.getElementById('str-b').value;
        console.log(textA);
        console.log(textB);
        p.innerHTML = textA.concat(textB);
    }

// 找位置
    function findFirstB() {
        let textA = document.getElementById('str-a').value;
        let textB = document.getElementById('str-b').value;
        p.innerHTML = textA.indexOf(textB);
    }

// 找位置
    function findLastA() {
        let textA = document.getElementById('str-a').value;
        let textB = document.getElementById('str-b').value;
        p.innerHTML = textB.lastIndexOf(textA);
    }

// 截取
    function getAtoB() {
        let text = document.getElementById(textId).value;
        let start = document.getElementById('num-a').value;
        let end = document.getElementById('num-b').value;
        p.innerHTML = text.slice(start,end);
    }
    
// 得到行数
    function getLine() {
        let text = document.getElementById(textId).value;
        let arr = text.split('\n');
        p.innerHTML = arr.length;
    }

//
};