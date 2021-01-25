// 為了避免哈希碰到，index 取一個 key / 大質數的 mod (餘數) 例如 2069
// 建立一個 linked list 組成的 array

function Node(value, key) {
    this.key = key 
    this.value = value
    this.next = null
}

var MyHashMap = function() {
    this.data = new Array(2069)
    for (let i = 0; i < this.data.length; i++) {
        this.data[i] = new Node()
    }
};  

MyHashMap.prototype.put = function(key, value) {
    const index = key % 2069
    let current = this.data[index]
    let pre= null

    if (current.value === null) {
        current.value = value
        current.key = key
        return
    }

    while (current !== null && current.value !== null) {
        if (current.key === key) {
            current.value = value
            return
        }
        
        pre = current
        current = current.next
    }
    pre.next = new Node(value, key)
};

MyHashMap.prototype.get = function(key) {
    const index = key % 2069
    let current = this.data[index]

    while (current !== null && current.value !== null) {
        if (current.key === key) {return current.value}
        current = current.next
    }
    return -1
};

MyHashMap.prototype.remove = function(key) {
    const index = key % 2069
    let pre = null
    let current = this.data[index]

    while (current !== null && current.value !== null) {
        if (current.key === key) {
            if (pre === null) {
                this.data[index] = current.next
            } else {
                pre.next = current.next
            }
            return 
        }
        pre = current
        current = current.next
    }
};