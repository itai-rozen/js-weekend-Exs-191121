const countDuplicates = str => {
    let lettersMap = [...str].reduce((acc,letter) => {
        letter = letter.toLowerCase() 
        if (acc[letter]) acc[letter]++
         else  acc[letter] = 1
         return acc
    },{})
    let onlyDuplicates = {}
    for (letter in lettersMap){
        if (lettersMap[letter] > 1){
            onlyDuplicates[letter] = lettersMap[letter]
        }  
    }
    return onlyDuplicates
}

let str2 = 'abcddeefgazxX'
console.log('original string: ',str2)
console.log('object of only duplicates: ',countDuplicates(str2))