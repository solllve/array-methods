const array = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Mike',
        age: 23
    },
    {
        name: 'Nancy',
        age: 40
    },
    {
        name: 'Jenny',
        age: 22
    }
]

const arrayNum = [1, 2, 3]

//Filter method
const filteredItems = array.filter((item) => {
    return item.age >= 30
})

//Map method
const mapItems = array.map((item) => {
    return item.name
})

//Find method
const findItem = array.find((item) => {
    return item.age === 40
})

//ForEach method
const forEachItem = array.forEach((item) => {
    console.log(item.name)
})

//Some method
const someItem = array.some((item) => {
    return item.age === 40
})

//Every method
const everyItem = array.every((item) => {
    return item.age >= 30
})

//Reduce method
const reduceItem = array.reduce((acc, item) => {
    return acc + item.age
}, 0) //starting point

//Includes method
const includesItem = arrayNum.includes(2)

console.log(includesItem)
