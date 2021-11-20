const accum = str => {
    let newStrArr = [];
    [...str].forEach((letter,i) => newStrArr.push(letter.toUpperCase() + letter.repeat(i)))
    return newStrArr.join('-')
}
let str1 = 'book'
console.log('original string: ', str1)
console.log('string after mumbling: ', accum(str1))