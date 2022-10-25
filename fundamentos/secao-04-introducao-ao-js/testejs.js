let fralda = "";
let tamanhoFralda = 9;

if (tamanhoFralda <= 4) {
    fralda = 'RN'
} else if (tamanhoFralda > 4 && tamanhoFralda <=6 ) {
    fralda = 'Pqn'
} else if (tamanhoFralda > 6 && tamanhoFralda <=8) {
    fralda = 'Med'
} else if (tamanhoFralda > 8 && tamanhoFralda <=10) {
    fralda = 'G'
} else if (tamanhoFralda > 10 && tamanhoFralda <=12 ) {
    fralda = 'GG'
} else if (tamanhoFralda > 12) {
    fralda = 'Parabéns, ele cresceu!'
}
console.log (fralda)