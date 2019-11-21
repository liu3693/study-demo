window.onload = function() {

    let input = document.getElementById('email-input');
    input.focus();// 自动聚焦，或者<input autofocus>
    let postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
    let ulNode = document.getElementById('email-sug-wrapper');
    let nowSelectTipIndex = 0;
    for (let i = 0; i < postfixList.length; i++) {
        ulNode.appendChild(document.createElement('li'))
    }

    input.addEventListener('input', function () {
        listState();
        promptLi();
        //     获取用户输入，生成提示框中的提示内容，将提示内容添加到email - sug - wrapper中
        //     控制email - sug - wrapper的显示 / 隐藏状态
    });
    ulNode.addEventListener('click',function (ev) {
        if (ev.target.nodeName.toLowerCase() === 'li'){
            let email = escape2Html(ev.target.innerHTML);
            input.value = email;
            hidde()
        }
        //  点击选中内容，放入input，ul隐藏
    });
    input.addEventListener('keydown',function (ev) {
        if (ev.key === 'Enter' ){
            let email = escape2Html(ulNode.children[nowSelectTipIndex].innerHTML);
            input.value = email;
            hidde()
            console.log('enter')
        }
        if (ev.key === 'ArrowUp') {
            ev.preventDefault();
            nowSelectTipIndex -= 1;
            if (nowSelectTipIndex<0){
                nowSelectTipIndex = emailList().length-1;
            }
            promptLi();
            console.log('up')
        }
        if (ev.key === 'ArrowDown') {
            ev.preventDefault();
            nowSelectTipIndex += 1;
            if (nowSelectTipIndex>emailList().length-1){
                nowSelectTipIndex = 0
            }
            promptLi();
            console.log('down')
        }
        if (ev.key === 'Escape'){
            ev.stopPropagation();//组织事件冒泡
            input.select();
            console.log('esc')
        }
    })


    // 将输入值去除空格
    function getText() {
        let text = input.value;
        return text.trim();
    }
    // 得到提示内容
    function emailList() {
        let text = getText();
        let fixText='';
        // 输入中是否有@
        if (text.includes('@')) {
            let arr = text.split('@');
            text = arr[0].toString();
            fixText = arr[1].toString();
        }

        let list=[];
        for (let i = 0; i < postfixList.length; i++) {
            if (postfixList[i].startsWith(fixText)&&fixText!=='') {
                list.push(html2Escape(text+'@'+postfixList[i]));
            }else if (fixText === '') {
                list[i] = html2Escape(text+'@'+postfixList[i]);
            }
            //把用户输入和每一个postfix进行结合成为每一个Li
        }
        for (let i=0;i<list.length;i++){
            ulNode.children[i].className = 'unselect';
        }
        ulNode.children[nowSelectTipIndex].className = 'select';
        return list;
    }

    // 将提示内容ul的li中
    function promptLi(){
        //将内容添加到email - sug - wrapper中
        let emailAddress = emailList();
        let liNodes = ulNode.getElementsByTagName('li');
        for (let i =0;i<postfixList.length;i++){
            if (i < emailAddress.length) {
                liNodes[i].innerHTML = emailAddress[i];
            }else {
                liNodes[i].innerHTML = ''
            }
        }

        // console.log(ulNode)
    }

    // 控制提示内通显示隐藏
    function listState(){
        let text= getText();
        if (text === '') {
            hidde()
        } else {
            show()
        }
    }

    function hidde() {
        ulNode.style.cssText = 'display:none';
    }

    function show() {
        ulNode.style.cssText = 'display:block';
    }

    // 转码与解码
    function html2Escape(sHtml) {
        return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
    }

    function escape2Html(str) {
        let arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
    }
}