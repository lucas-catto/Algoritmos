
// 2)	Faça um programa que receba uma senha formada de quatro números inteiros, verifique se a senha está correta e, caso não esteja, solicite novamente a senha. Se a senha entrada for a correta, deverá ser apresentada a mensagem “Senha Correta”, caso contrário, “Senha Incorreta”.


let passwordUser;
let password = "2023";

while (true) {
    passwordUser = prompt("Informe uma senha: ");

    if   (passwordUser == password) { break;                          }
    else                            { console.log("Senha errada..."); }
}
