
// 5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.

let value  = parseInt(prompt("Informe um número:"));
let result = 0;

for (let i = value; i > 0; i--) {
    result += i;    
}

console.log(result);
