var numUniqueEmails = function(emails) {
    let cache = new Set()

    for (let i = 0; i < emails.length; i++) {
        let email = emails[i].split('@')
        let local = email[0].split('')

        for (let j = 0; j < local.length; j++) {
            if (local[j] === '.') {
                local.splice(j, 1)
                j--
            } else if (local[j] === '+') {
                local.splice(j)
            }
        }
        let modified = local.join('') + '@' + email[1]
        if (!cache.has(modified)) {cache.add(modified)}
    }

    return cache.size
};

const emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

console.log(numUniqueEmails(emails))