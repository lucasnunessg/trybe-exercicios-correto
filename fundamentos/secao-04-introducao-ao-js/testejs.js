let fralda;
let tamanhoFralda = 6;

if (tamanhoFralda <= 4) {
    fralda = 'RN'
} else if (tamanhoFralda > 4 && tamanhoFralda <=6 ) {
    fralda = 'Pqn'
} else if (tamanhoFralda > 8 && tamanhoFralda <=10) {
    fralda = 'Med'
} else if (tamanhoFralda > 12 && tamanhoFralda <=14) {
    fralda = 'G'
} else if (tamanhoFralda > 16 && tamanhoFralda <=18 ) {
    fralda = 'GG'
} else if (tamanhoFralda > 18) {
    fralda = 'Parabéns, ele cresceu!'
}
console.log (fralda)