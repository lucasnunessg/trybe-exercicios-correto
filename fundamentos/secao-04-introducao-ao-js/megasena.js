// jogo lucas

let jogoLucas = [13, 17, 24, 39, 42, 59];


// Criando o sorteio
let n1 = Math.floor (Math.random() * 60) +1;
let n2 = Math.floor (Math.random() * 60) +1;
let n3 = Math.floor (Math.random() * 60) +1;
let n4 = Math.floor (Math.random() * 60) +1;
let n5 = Math.floor (Math.random() * 60) +1;
let n6 = Math.floor (Math.random() * 60) +1;

let megaSena = [n1, n2, n3, n4, n5, n6];

    // percorrendo os dois arrays 
console.log ('Mega Sena do Lucas');

for (let index = 0; index < jogoLucas.length;index +=1) {
    console.log (jogoLucas [index]);
}
   console.log ('Jogo Sorteado')
for (let index = 0; index < megaSena.length; index += 1) {
    console.log (megaSena[index]);
}

// 4- Comparando o jogo com o sorteio.

let acertos = 0;

  for (let iJogo = 0; iJogo < jogoLucas.length;iJogo +=1) {
   
  for (let iSorteio = 0; iSorteio < megaSena.length; iSorteio += 1) {
  
    if (jogoLucas [iJogo] == megaSena [iSorteio]) {
        acertos +=1;
    }
}
}

// 5 - Imprimindo os resultados

console.log ('Número de acertos: ', acertos)