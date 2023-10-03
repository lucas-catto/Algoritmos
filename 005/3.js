
// 3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.

let value = parseInt(prompt("Informe um número:"));

for (let i = 0; i < value; i++) {
    if   (i % 2 == 0) { console.log("Par: "   + i); }
    else              { console.log("ìmpar: " + i); }
}
