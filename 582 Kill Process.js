var killProcess = function(pid, ppid, kill) {
    let list = [kill]

    const findChildren = (id) => {
        let index = []

        for (let i = 0; i < ppid.length; i++) {
            if (ppid[i] === id) {index.push(i)}
        }

        if (index.length === 0) {return}

        for (let i = 0; i < index.length; i++) {
            list.push(pid[index[i]])
            findChildren(pid[index[i]])
        }
    }

    findChildren(kill)
    return list
};

const pid =  [1, 3, 10, 5]
const ppid = [3, 0, 5, 3]
const kill = 5

console.log(killProcess(pid, ppid, kill))