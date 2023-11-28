

// 1)	Crie um algoritmo para ler 5 números inteiros, armazene-os em um vetor e mostre os números pares deste vetor;

let vetor = [];

for (let i = 0; i < 5; i++) {
    vetor[i] = parseInt(prompt("Informe o "+(i+1)+"º número!"));
}

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
        console.log("=> " + vetor[i]);
    }
}

// 2)	Faça um algoritmo que leia 6 valores do tipo inteiro e armazene-os em um vetor. A seguir, o algoritmo deverá exibir: 
// (a) todos os números ímpares que existem no vetor; 
// (b) o menor valor existente no vetor;
// (c) a média dos valores do vetor;

let vetor_ = [];

for (let i = 0; i < 5; i++) {

    vetor_[i] = parseInt(prompt("Informe o "+(i+1)+" número!"));
}

console.log("Números Ímpares:");

for (let i = 0; i < vetor_.length; i++) {

    if (vetor_[i] % 2 == 1) {
        
        console.log("=> " + vetor_[i]);
    }
}

let min = vetor_[0];

for (let i = 0; i < vetor_.length; i++) {

    if (vetor_[i] < min) {

        min = vetor_[i];
    }
}

console.log("Entre "+ vetor_ + "\n=> " + min + " é o menor número");

let total      = 0;
let numbersSum = 0;

for (let i = 0; i < vetor_.length; i++) {

    numbersSum += vetor_[i];
    total++;
}

console.log("A média entre " + vetor_ + " é:\n=> " + (numbersSum / total));
