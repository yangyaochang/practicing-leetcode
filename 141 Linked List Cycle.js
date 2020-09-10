var hasCycle = function(head) {
    let fast = head
    let slow = head

    while (slow !== null && fast !== null && head.next !== null) {
        fast = fast.next
        if (fast === null) {return false}
        else {fast = fast.next}
        slow = slow.next

        if (fast === slow) {return true}
    }
    return false
};

/*
第二次做
先處理 num of nodes < 2 的狀況
兩個 pointers 設在起點
因為 fast 一次要動兩步 所以要同時 check fast, fast.next 是否不為 null
*/

var hasCycle = function(head) {
    if (head === null || head.next === null) {return false}
    let fast = head
    let slow = head
    
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        
        if (fast === slow) {return true}
    }
    
    return false
};

/* 
第三次做
上一次判斷 head.next === null 是多餘的
*/

var hasCycle = function(head) {
    let fast = head
    let slow = head

    while (head === null) {return false}

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {return true}
    }
    return false
}