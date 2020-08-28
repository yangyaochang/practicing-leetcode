/*
Time Complexity: O(k * (C N 取 k))
Space Complexity: O(C N 取 k) => 研究一下公式怎麼從 p 推到 c (http://math1.ck.tp.edu.tw/%E6%9E%97%E4%BF%A1%E5%AE%89/%E5%AD%B8%E8%A1%93%E7%A0%94%E7%A9%B6/%E7%A7%91%E5%AD%B8%E7%8F%AD/%E8%AA%B2%E7%A8%8B%E8%AC%9B%E7%BE%A9/%E7%AC%AC33%E5%96%AE%E5%85%83%E6%8E%92%E5%88%97%E7%B5%84%E5%90%88.pdf)
*/

var combine = function(n, k) {
    const list = []

    const dfs = (path, start) => {
        if (path.length === k) {
            list.push([...path])
            return
        }
        if (start > n) {return}

        for (let i = start; i <= n; i++) {
            path.push(i)
            dfs(path, i + 1)
            path.pop()
        }
    }

    dfs([], 1)
    return list
};

// 第二次做


var combine = function(n, k) {
    const list = []
    
    const add = (path, start) => {
        if (path.length === k) {
            list.push([...path])
            return
        }
        
        for (let i = start; i <= n; i++) {
            path.push(i)
            add(path, i + 1)
            path.pop()
        }
    }
    
    add([], 1)
    return list
};

const n = 4
const k = 2

console.log(combine(n , k))

/*
第三次做
*/

var combine = function(n, k) {
    const list = []

    const findCombination = (path, start) => {
        if (path.length === k) {
            list.push([...path])
            return
        }

        for (let i = start; i <= n; i ++) {
            path.push(i)
            findCombination(path, i + 1)
            path.pop()
        }
    }

    findCombination([], 1)
    return list
}

const n = 4
const k = 2

console.log(combine(n, k))