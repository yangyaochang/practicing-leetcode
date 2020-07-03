/*
直接排除兩個方形不相交的四種狀況，在左邊、右邊、上面、與下面
*/

var isRectangleOverlap = function(rec1, rec2) {
    if (rec2[3] <= rec1[1] || rec2[0] >= rec1[2] || rec2[1] >= rec1[3] || rec2[2] <= rec1[0]) {return false}

    return true
};

const rec1 = [7,8,13,15]
const rec2 = [10,8,12,20]

console.log(isRectangleOverlap(rec1, rec2))