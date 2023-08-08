// 3)	Faça um algoritmo que dado 5 números, calcule e mostre a média;

var vetor = [3,5,7,8,2];
var soma = 0;

for (let i = 0; i < vetor.length; i++) { 
    soma += vetor[i];
}

var view = soma / vetor.length;
console.log(view);
