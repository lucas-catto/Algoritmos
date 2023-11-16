
// 2.	Faça um algoritmo que leia 6 números e armazene em um vetor. Depois, some os 3 primeiros elementos deste vetor.

let vetor = [];
let sum   = 0;

for (let i = 0; i <= 5; i++) {
    vetor[i] = parseInt(prompt("Informe o " + (i+1) + "º número:"));
}

for (let c = 0; c <= 2; c++) {
    sum += vetor[c];
}

console.log(sum);
