
// 3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.

let inicio    = parseInt(prompt("Número Inicial: "));
let fim       = parseInt(prompt("Número Final: "))

let parCont   = 0;
let imparCont = 0;

for (let i = inicio; i <= fim; i++) {

    if   (i % 2 == 0) { parCont++;   }
    else              { imparCont++; }
}

console.log("Quantidade de Pares: "   + parCont);
console.log("Quantidade de Ímpares: " + imparCont);
