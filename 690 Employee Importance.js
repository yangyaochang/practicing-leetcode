var GetImportance = function(employees, id) {
    let total = 0
    
    const addImportance = (ids) => {
        for (let i = 0; i < ids.length; i++) {
            for (let j = 0; j < employees.length; j++) {
                if (ids[i] === employees[j][0]) {
                    total += employees[j][1]
                    addImportance(employees[j][2])
                }
            }
        }
    }

    addImportance([id])
    return total
};

const employees = [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]]
const id = 1

console.log(GetImportance(employees, id))