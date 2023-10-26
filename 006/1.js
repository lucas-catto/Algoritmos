
// 1)	Faça um programa que leia um conjunto não determinado de valores e mostre o valor lido, seu dobro, seu quadrado e seu cubo.  Finalize a entrada de dados com um valor negativo ou zero.


let number;

while (true) {
    number = parseInt(prompt("Informe um número (0 p/ parar): "));

    console.log("Dobro: "    + (number *  2));
    console.log("Quadrado: " + (number *  number));
    console.log("Cubo: "     + (number ** number));
    
    if (number == 0) { break; }
}
