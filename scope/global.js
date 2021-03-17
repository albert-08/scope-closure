var hello = 'Hello'
var hello = 'Hello +'
let world = 'Hello World'
const helloWorld = 'Hello World!'

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()

const helloWorldFunction = () => {
    globalVar = 'Im global'
}

helloWorldFunction()
console.log(globalVar)

const anotherFunction2 = () => {
    var localVar = globalVar = 'Im Global'
}

anotherFunction2()
console.log(globalVar)