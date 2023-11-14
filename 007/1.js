
// 1.	Crie um algoritmo para ler 5 números inteiros, armazene-os em um vetor, e mostre a quantidade de números pares e ímpares deste vetor.

let numbers = [];
let pares   = 0;
let impares = 0;

for (let i = 0; i < 5; i++) {

    numbers[i] = prompt(parseInt("Informe o " + i + "º número:"));
}

for (let i = 0; i < numbers.length; i++) {
    
    if (numbers[i] % 2 == 0) {
        pares++;
    }
    else {
        impares++;
    }
}

console.log("Pares: " + pares + "\nÍmpares: " + impares);
