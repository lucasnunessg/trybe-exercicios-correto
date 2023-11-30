const fs = require('fs').promises;

async function readSimpsons() {
    try{
    const fileRead = await fs.readFile('simpsons.json', 'utf-8')
    const simpsons = JSON.parse(fileRead)
    const strings = simpsons.map(({id, name}) => `${id} - ${name}`)
    strings.forEach((string) => console.log(string));
} catch{
    console.error(`Não foi possível ler o arquivo ${error.message}`)
}
    
}

readSimpsons()