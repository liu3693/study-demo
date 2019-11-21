
```javascript
var btn = document.getElementsByTagName('button');
    for (var i = 0; i < btn.length; i++) {

        btn[i].onclick = function (ev) {
            var thisbtn = ev.target;
        }
        }
```

对于获取到的Node list,可以遍历其中的元素，通过btn[i].onclick 添加事件句柄。然后通过ev.target就能够获取到，当前发生事件的元素。