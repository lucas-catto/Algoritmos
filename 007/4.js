
// 4.	Faça um algoritmo que receba 5 números inteiros, armazene-os em um vetor, em seguida, descubra e exiba o maior número.

let vetor = [];

for (let i = 0; i <= 4; i++) {
    vetor[i] = parseInt(prompt("Informe o " + (i+1) + " número:"));
}

let menor = vetor[0];

for (let c = 0; c <= vetor.length; c++) {
    if (menor > vetor[c]) {
        menor = vetor[c];
    }
}

alert(menor);
