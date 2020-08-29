/*
奇數個的字母也可以用，只是會留下一個
最後只能有一個字母用奇數個，所以若有奇數最後須加 1
*/

var longestPalindrome = function(s) {
    const chars = {}
    let length = 0
    let oddNum = false
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in chars) {chars[s[i]]++}
        else {chars[s[i]] = 1}
    }

    console.log(chars)
    
    const keys = Object.keys(chars)
    
    keys.forEach(key => {
        if (chars[key] % 2 === 0) {
            length += chars[key]
        }
        else if (chars[key] % 2 === 1) {
            oddNum = true
            length += chars[key] - 1
        }
    })
    
    return (oddNum) ? length + 1 : length
};

const s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

console.log(longestPalindrome(s))