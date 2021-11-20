const isIsogram = str => {
    let isogram= [...str].reduce((acc,char) => {
        char = char.toLowerCase()
        if (acc[char]) return false
        else acc[char] = 1
        return acc
    },{})
    return (isogram)? true: false 
}
let str5 = 'ab'
let str6 = 'aba'
let str7 = 'abA'
console.log(`is ${str5} isogram? ${isIsogram(str5)}`)
console.log(`is ${str6} isogram? ${isIsogram(str6)}`)
console.log(`is ${str7} isogram? ${isIsogram(str7)}`)