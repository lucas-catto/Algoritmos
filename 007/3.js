
// 3.	Crie um programa que solicite a entrada de 5 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 2, e exiba os valores dos dois vetores na tela.

let vetor = [];

for (let i = 0; i <= 4; i++) {
    vetor[i] = parseInt(prompt("Informe o " + (i+1) + "º número:"));
}

let _vetor = [];

for (let c = 0; c < vetor.length; c++) {
    _vetor[c] = vetor[c] * 2;    
}

console.table(vetor);
console.table(_vetor);
