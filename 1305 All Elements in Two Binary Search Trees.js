var getAllElements = function(root1, root2) {
    let list1 = []
    let list2 = []

    inorder(root1, list1)
    inorder(root2, list2)
    
    return merge(list1, list2)
    
    function inorder(current, list) {
        if (current === null) {return}
        
        inorder(current.left, list)
        list.push(current.val)
        inorder(current.right, list)
    }
    
    function merge(arr1, arr2) {
        let list = []
        
        if (arr1.length === 0) {return arr2}
        if (arr2.length === 0) {return arr1}
        
        let p1 = 0
        let p2 = 0
        
        while(p1 < arr1.length && p2 < arr2.length) {
            if (arr1[p1] <= arr2[p2]) {
                list.push(arr1[p1])
                p1++
            } else if (arr1[p1] > arr2[p2]) {
                list.push(arr2[p2])
                p2++
            }
        }
        
        if (p1 === arr1.length) {
            list = list.concat(arr2.splice(p2))
        } else if (p2 === arr2.length) {
            list = list.concat(arr1.splice(p1))
        }
        return list 
    }
};