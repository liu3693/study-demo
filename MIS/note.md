- html对象添加自定义属性使用setAttribute()，获取自定义属性只能用getAttribute().
- 自定义属性使用大写会自动转为小写。
- 对包含对象的数组排序
```javascript
var arr = [{'name': '张三', age: 26},{'name': '李四', age: 12},{'name': '王五', age: 37},{'name': '赵六', age: 4}];
var objectArraySort = function (keyName) {
    return function (objectN, objectM) {
    var valueN = objectN[keyName];
    var valueM = objectM[keyName];
    if (valueN < valueM) return 1;
    else if (valueN > valueM) return -1;
    else return 0
 }
};
arr.sort(objectArraySort('age'))
```

- 删除nodeList中的元素：对父级节点使用nodeList.removeChild(children[i]);

- 数组去重
```javascript
arr = [...new Set(arr)]
```

- 不论鼠标指针离开被选元素还是任何子元素，都会触发 mouseout 事件。只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件。