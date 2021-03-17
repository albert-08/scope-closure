const helloWorld = () => {
    const hello = 'Hello World!'
    console.log(hello)
}

helloWorld()

var scope = 'Im global'

const functionScope = () => {
    //Ambito lexico
    var scope = "I am just a local"
    const func = () => {
        return scope
    }
    console.log(func())
}

functionScope()
console.log(scope)