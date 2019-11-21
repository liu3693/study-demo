# 事件
- 单选radio控件，选中事件也是click
- 使用style.cssText更改css样式，相当于对标签对象对style属性进行修改
- 利用冒泡事件，在父级元素绑定事件，子元素发生事件后传到父元素后执行。解决性能问题、新增子元素也能够触发。

- disable属性的值 使用true,false控制
- 注意css属性的值为string


## 跨浏览器的事件对象
```javascript
var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent(on + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },

    getEvent: function (event) {
        return event ? event : window.event;

    },

    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent(on + type, handler);
        } else {
            element['on' + type] = null
        }
    }
   
};
```
# 定时
```javascript
setInterval(func,1000);
setTimeout(func,1000);
setInterval('func()',1000);
setTimeout('func()',1000);
// 如果传入参数,用引号包裹
let timmer1 = setInterval('func(attr)',1000);
let timmer2 = setTimeout('func(attr)',1000);
// 停止
clearInterval(timmer1)
clearTimeout(timmer2)
```