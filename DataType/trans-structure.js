var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    },
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    },
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

// obj to arr

let scoreArray = [];
let members = Object.keys(scoreObject);
for (let i = 0; i < members.length; i++) {
    scoreArray[i] = [];
    scoreArray[i].push(members[i]);
    let score = Object.keys(scoreObject[members[i]]);
    for (let j = 0; j < score.length; j++){
        scoreArray[i].push(scoreObject[members[i]][score[j]]);
    }
}

console.log(scoreArray);

// arr to obj

/*let menuObject = {};
let objArr = [];
menuArr.forEach(function (each) {
    each[0] = {};
});*/

function arryToObject(arry){
    var menuObject ={}//创建一个空对象
    for(var i=0,len=arry.length;i<len;i++){
        var arr1= [];
        // console.log(arry[i]);
        arr1=arry[i];
        // console.log(arry1);
        if(arr1[2]== -1){

            menuObject[arr1[0]]={
                "name":arr1[1],
                "subMenu":{ }
            }
        }

        if(arr1[2]== 1){
            console.log(arr1[2]);
            menuObject["1"]["subMenu"][arr1[0]]={
                "name":arr1[2],
                "subMenu":{}
            }
        }
        if(arr1[2]== 2){
            menuObject["2"]["subMenu"][arr1[0]]={
                "name":arr1[2],
                "subMenu":{}
            }
        }
        if(arr1[2]== "4"){
            menuObject["1"]["subMenu"]["4"]["subMenu"][arr1[0]]={
                "name":arr1[2],
                "subMenu":{}
            }
        }
        if(arr1[2]==6){
            menuObject["2"]["subMenu"]["6"]["subMenu"][arr1[0]]={
                "name":arr1[2],
                "subMenu":{}
            }
        }
    }
    return menuObject;
}
console.log(arryToObject(menuArr));
