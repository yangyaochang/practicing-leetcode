var numOfMinutes = function(n, headID, manager, informTime) {
    const graph = {}
    
    for (let i = 0; i < n; i++) {
        graph[i] = []
    }
    
    for (let i = 0; i < n; i ++) {
        if (manager[i] !== -1) {graph[manager[i]].push(i)}
    }
    
    const queue = []
    let duration = 0
    queue.push([headID, 0])
    
    while (queue.length > 0) {
        const [current, time] = queue.shift()
        duration = Math.max(duration, time)
        
        if (current in graph === false) {continue}
        const employee = graph[current] 
        employee.forEach(p => {queue.push([p, time + informTime[current]])})
    }
    
    return duration
};