// 数字排序
{
    let arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
    // 降序
    arr.sort((a, b) => b - a);
    console.log(arr);
    // 升序
    arr.sort(function (a, b) {
        return a - b
    });
    console.log(arr);
}
// 字符串排序
{
    let arr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
    // a-z
    arr.sort();
    console.log(arr);
    // z-a
    arr.sort().reverse();
    console.log(arr)
}
// 二维数组
{
    let arr = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
    arr.sort(function (a, b) {
        return b[1]-a[1]
    })
    console.log(arr)
}
// 对象
{
    let arr = [
        {
            id: 1,
            name: 'candy',
            value: 40
        }, {
            id: 2,
            name: 'Simon',
            value: 50
        }, {
            id: 3,
            name: 'Tony',
            value: 45
        }, {
            id: 4,
            name: 'Annie',
            value: 60
        }
    ];
    arr.sort((a,b) => a.value-b.value)
    console.log(arr)
}