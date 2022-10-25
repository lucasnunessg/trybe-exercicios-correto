// jogo lucas

let jogoLucas = [13, 17, 24, 39, 42, 59];
console.log (jogoLucas);

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