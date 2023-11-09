
// 1)	Faça um programa que leia um conjunto não determinado de valores e mostre o valor lido, seu dobro, seu quadrado e seu cubo.  Finalize a entrada de dados com um valor negativo ou zero.


let number;

while (number > 0) {
    number = parseInt(prompt("Informe um número (0 p/ parar): "));

    console.log("Dobro: "    + (number *  2));
    console.log("Quadrado: " + (number ** 2));
    console.log("Cubo: "     + (number ** 3));
}
