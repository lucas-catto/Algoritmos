
// 2 Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos).

var cont = 0;

for (let i = 0; i <= 70; i++) {
    if (i % 7 == 0) { cont++; }
}

console.log("Amount: " + cont);
