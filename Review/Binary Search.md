## 704. Binary Search

在 Sorted Array (排序過的值) 裡面搜尋可以想到用 Binary Search。

在沒有重複元素的 sorted array 中執行 binary search

二分搜尋的邏輯是用兩個 pointers 規範出查找的範圍。`right` 初始值為 `nums.length - 1`，表示 `left` 和 `right` 規範出的是一個封閉區間，所以後續在查找的時候 `while` loop 的 condition 為 `left <= right`。因為當 `left === right` 時封閉區間內仍有一個元素仍然需要執行查找。

因為 `left` 和 `right` 規範出的是一個封閉區間，所以查找後 `left` 和 `right` 的移動分別為 `mid + 1` 和 `mid - 1` 

將所有條件條列清楚，不要使用 `else`

	function search(nums, target) {
		let left = 0
		let right = nums.length - 1
		    
		while (left <= right) {
			const mid = Math.floor((left + right) / 2)
			    
			if (nums[mid] === target) {return mid}
			else if (nums[mid] > target) {right = mid - 1}
			else if (nums[mid] < target) {left = mid + 1}
		}
		return -1
	}
	
## 34. Find First and Last Position of Element in Sorted Array

在有重複元素的 sorted array 裡搜尋左右邊界

搜尋左邊界模板：

* 當 `target === nums[mid]` 的時候 `right = mid - 1`
* 因為 `while` loop 的 condition 為 `left <= right`，所以當 target 比所有數都大的時候，沒有找到 taregt，且 `while` loop 終止條件為 `left === right + 1`，所以 `left` 可能會出界。
* 最後返回時要檢查越界或 `nums[left] !== target` (target 不存在) 兩種情況。left 指向不是 target 的值 (target 不存在) 其實就是最基本二分查找中，若 `while` loop 結束但沒有找到 target 的狀況，left 會停在不是 target 的值的位置，但因為基本二分查找此時情況只有一種不需特別表明。就是多檢查越界狀況。

左邊界代表 (`left` 最指向的 index) 的意義是，小於 target 的值的個數，但如果要找小於 target 的值的個數，最後就不需判斷出界與 target 不存在的狀況，直接返回 `left`

	function search(nums, target) {
		let left = 0
		let right = nums.length - 1
		    
		while (left <= right) {
			const mid = Math.floor((left + right) / 2)
			    
			if (nums[mid] === target) {right = mid - 1}
			else if (nums[mid] > target) {right = mid - 1}
			else if (nums[mid] < target) {left = mid + 1}
		}
		
		if (left >= nums.length || nums[left] !== target) {return -1}
		return left
	}
	
搜尋右邊界模板：

* 當 `target === nums[mid]` 的時候 `left = mid + 1`
* 因為 `while` loop 的 condition 為 `left <= right`，所以當 target 比所有數都小的時候，沒有找到 taregt，且 `while` loop 終止條件為 `right === left - 1`，所以 `right` 可能會出界。
* 最後返回時要檢查越界或 `nums[right] !== target` (target 不存在) 兩種情況。right 指向不是 target 的值 (target 不存在) 其實就是最基本二分查找中，若 `while` loop 結束但沒有找到 target 的狀況，right 會停在不是 target 的值的位置，但因為基本二分查找此時情況只有一種不需特別表明。就是多檢查越界狀況。            

```
	function search(nums, target) {
		let left = 0
		let right = nums.length - 1
		    
		while (left <= right) {
			const mid = Math.floor((left + right) / 2)
			    
			if (nums[mid] === target) {left = mid + 1}
			else if (nums[mid] > target) {right = mid - 1}
			else if (nums[mid] < target) {left = mid + 1}
		}
		
		if (right < 0 || nums[right] !== target) {return -1}
		return right
	}
```

## 33. Search in Ratated Sorted Array

一個沒有重複元素的 sorted array 若是 rotated，那麼 `nums[left] > nums[right]`

若 `nums[mid] > nums[left]` 則左半為 sorted，若 traget 在此區則執行 binary search

若 `nums[mid] < nums[right]` 則右半為 sorted，若 traget 在此區則執行 binary search

當搜索範圍不再 rotated，直接調用 binary search



## 153. Find Minimum in Ratated Sorted Array

while (nums[left] > nums[right]) => rotated
right sorted => mid could be the smallest
if (nums[mid] === nums[left]) 只發生在剩兩個元素 right 為最小

覺得目前最合理的答案 想一下 iteration 怎麼做

var findMin = function(nums) {
    const find = (left, right) => {
        if (left === right) {return nums[left]}
        if (left + 1 === right) {return Math.min(nums[left], nums[right])}
        if (nums[left] < nums[right]) {return nums[left]}
        
        const mid = Math.floor((left + right) / 2)
        
        if (nums[mid] > nums[left]) {
            return find(mid + 1, right)
        } else if (nums[mid] < nums[right]) {
            return find(left, mid)
        }
    }
    
    return find(0, nums.length - 1)
};

## 154. Find Minimum in Rotated Sorted Array II

一直對分到只剩一個

因為無法判定只需要看哪一邊

2,2,3,1,2,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,3,1,2,2,2,2

如果 right > left 還是可以確定是 sroted 即便有重複

var findMin = function(nums) {
    
    const divide = (left, right) => {
        if (left === right) {return nums[left]}
        if (nums[left] < nums[right]) {return nums[left]}
      
        let mid = Math.floor((left + right) / 2)

        return Math.min(divide(left, mid), divide(mid + 1, right))
    }

    return divide(0, nums.length - 1)
};

## 31. Next Permutation

[講解影片](https://www.youtube.com/watch?v=quAS1iydq7U)

影片以排列的基本方法出發解釋此題覺得非常具有參考價值

從一個找到窮舉所有排列的過程中可以發現 (畫樹狀圖會更好理解)，要找到下一個排列必須 backtrack 到與下一個排列共享的最低父節點，而這個點正好會是從後面數來嚴格遞減排列前的第一個 item。(The item before strictly decreasing section)。

> 試想看看如果給定個數的元素是 Sorted，在每一個 Level 做選擇時，選到最大的時候都已經是該 Level 窮盡所有可能的時候。所以從後面數來只要是嚴格遞減都代表在該 Level 已窮盡所有可能，沒有下一個排列。

抵達最低共同父節點後，選擇比 item 大中最小的數取代 item (想像一下樹狀邏輯選下一個元素的意思)，接著因為是要找下一個排列，要靠樹狀的左邊走，所以必須從剩餘元素中以遞增方式選取。

> 因為 item 之後是 strictly decreasing，當 item 與比他大中最小的元素 swap 後，依然不改變 strictly decreasing 的狀態，未來要改為遞增可以直接 `reverse()`