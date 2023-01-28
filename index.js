const readline = require("readline")
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

let question = () => {
    return new Promise((resolve) => rl.question('', resolve))} 

console.log('Digite propriedades CSS e irei colocar em ordem alfabética')

let propertiesOrdered = []

async function main() {
    let properties = await question()

    if(properties === 'sair') {
        console.log(propertiesOrdered .sort( ))
        rl.close()
    }

    propertiesOrdered .push(properties)
    main()
}

main()