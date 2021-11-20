
const array = [1,1,2,3,4,5,6,6]
console.log('given array:',array)

// getting sum of array:
// using forEach
let sumWithForEach = 0
array.forEach(num => sumWithForEach += num)
console.log('sum with forEach loop:',sumWithForEach)

// using for loop
let sumWithFor = 0
for (let i = 0; i < array.length; i++){
    sumWithFor += array[i]
}
console.log('sum with for loop: ', sumWithFor)
// get only even numbers:
// using filter
const onlyEvensWithFilter = array.filter(num => num % 2 === 0)
console.log('only even number using filter: ', onlyEvensWithFilter)

// using for loop
let onlyEvensWithFor = []
for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0) onlyEvensWithFor.push(array[i])
}
console.log('only even numbers using for loop: ', onlyEvensWithFor)

// multiplying all array cells by 3:
// using map
const doublesWithMap = array.map(num => num * 3)

// using for loop
const doublesWithFor = []
for (let i = 0; i < array.length; i++){
    doublesWithFor.push(array[i] * 3)
}

console.log('all array cells multiplied by 3 using map: ',doublesWithMap)
console.log('all array cells multiplied by 3 using for loop: ',doublesWithFor)