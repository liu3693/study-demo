function updateDisplay(divId) {
    //更改check状态
    let box = document.getElementById(divId);
    let allInput = box.querySelectorAll('label input');
    for (let i = 0; i < allInput.length; i++) {
        if (i === allInput.length - 1) {
            allInput[i].setAttribute('check-type','all');
        }else {
            allInput[i].setAttribute('check-type','child');
        }
    }
    //分别给全选和子选项添加自定义属性
    let checkedCount = 0;
    box.addEventListener('click',function (ev) {
        if (ev.target.tagName === 'INPUT'){
            let type = ev.target.getAttribute('check-type');
            if (type === 'all') {//当点击全选时
                if (checkedCount !== allInput.length-1) {
                    allInput.forEach(function (each) {
                        each.checked = true;
                        checkedCount = allInput.length-1;
                    })
                }else if (checkedCount === allInput.length-1) {
                    allInput.forEach(function (each) {
                        each.checked = false;
                        checkedCount = 0;
                    })
                }
            }else if (type === 'child') {//当点击子选项
                if (ev.target.checked === false) {
                    if (checkedCount === 1){
                        ev.preventDefault();
                        alert('至少选择一项');
                    }else {
                        checkedCount -=1;
                        ev.target.setAttribute('state','false');
                        if (checkedCount !== allInput.length - 1) {
                            allInput[allInput.length-1].checked = false;
                        }
                        console.log(checkedCount)
                    }
                }else if (ev.target.checked === true) {
                    checkedCount += 1;
                    ev.target.setAttribute('state','true');
                    console.log(checkedCount);
                    if (checkedCount === allInput.length-1) {
                        allInput[allInput.length-1].checked = true;
                    }
                }
            }
        }
    })
    // 更改状态
}

export {updateDisplay}