var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }
        }
    }
}
findIdByName("Kai",tree);
findNameById(10,tree);
getListWithDLR(tree);

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name,tree) {
    if (tree.name === name) {
        console.log(tree.id)
    }
    if (tree.left !== undefined) {
        findIdByName(name,tree.left);
    }
    if (tree.right !== undefined) {
        findIdByName(name,tree.right);
    }

}

// 假设id和name均不会重复，根据输入id找到对应的name

function findNameById(id, tree) {
    if(tree.id === id) {
        console.log(tree.name);
    }
    if(tree.left !== undefined) {
        findNameById(id, tree.left);
    }
    if(tree.right !== undefined) {
        findNameById(id, tree.right);
    }
}


// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(tree) {
    if(tree.hasOwnProperty('name')) {
        console.log(tree.name);
    }
    if(tree.left !== undefined) {
        getListWithDLR(tree.left);
    }
    if(tree.right !== undefined) {
        getListWithDLR(tree.right);
    }
}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
    if(tree.left !== undefined) {
        getListWithDLR(tree.left);
    }
    if(tree.hasOwnProperty('name')) {
        console.log(tree.name);
    }
    if(tree.right !== undefined) {
        getListWithDLR(tree.right);
    }
}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
    if(tree.right !== undefined) {
        getListWithDLR(tree.right);
    }
    if(tree.left !== undefined) {
        getListWithDLR(tree.left);
    }
    if(tree.hasOwnProperty('name')) {
        console.log(tree.name);
    }
}