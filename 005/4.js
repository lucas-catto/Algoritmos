
//4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário;

let value = parseInt(prompt("Digite um número:"));
let soma  = 0;

for (let i = 0; i <= value ; i++){
    if (i % 11 == 0){
        soma += i;
    }
        

}
alert(soma);