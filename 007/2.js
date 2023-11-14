
// 2.	Faça um algoritmo que leia 6 números e armazene em um vetor. Depois, some os 3 primeiros elementos deste vetor.

let vetor = [];
let sum   = 0;

for (let i = 0; i < 6; i++) {
    vetor[i] += prompt(parseInt("Informe o " + i + "º número:"));
}

for (let i = 0; i < 3; i++) {
    sum += vetor[i];
}

console.log(sum);
