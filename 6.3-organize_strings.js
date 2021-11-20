const longest = (str1,str2) => {
    
    let joinedStrs = [...str1].concat([...str2])
    let distinctLetters = []
    joinedStrs.forEach(char => {
        if (!distinctLetters.includes(char)) distinctLetters.push(char)
    })
    return distinctLetters.sort().join('')
}
let str3 = 'abxcd'
let str4 = 'hgfdaaa'
console.log('original strings: ',str3, str4)
console.log('longest string: ',longest(str3,str4))