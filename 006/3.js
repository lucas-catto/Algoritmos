
// 3)	Faça um programa que leia números inteiros maiores que zero. Quando for entrado o número zero, o programa deverá apresentar quantos números foram entrados e a média destes.


let number      = 0;
let sumNumbers  = 0;
let cont        = 0;

let allNumbers  = [];

while (true) {
    
    number = parseInt(prompt("Informe um número"));

    if (number > 0) {
        sumNumbers += number;
        allNumbers[cont] = number;
        cont++;
    }
    else {
        if (number == 0) { break; }
    }
}

console.log("Média: "            + (sumNumbers / cont));
console.log("Todos os números: " + allNumbers);
