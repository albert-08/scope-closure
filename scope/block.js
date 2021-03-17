const fruits = () => {
    if(true) {
        //Ambito de función
        var fruits1 = 'apple'
        //Ambito de bloque
        let fruits2 = 'orange'
        const fruits3 = 'kiwi'
        console.log(fruits2)
        console.log(fruits3)
    }
    console.log(fruits1)
}

fruits()

let x = 1
{
    let x = 2
    console.log(x)
}
console.log(x)

const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        },1000)
    }
}

anotherFunction()