// 3.	Crie um programa que lê o ano de nascimento de uma pessoa e o ano atual. Calcule e mostre qual é: a idade da pessoa em anos, a idade da pessoa em meses, a idade da pessoa em dias e a idade da pessoa em semanas.

var yearBorn = parseInt(prompt("Ano de Nascimento: "));
var year     = parseInt(prompt("Ano Atual: "));

// ----------------------------------------
var months = (year - yearBorn) * 12;
var weeks  = (year - yearBorn) * 52;
var days   = (year - yearBorn) * 365;
// ----------------------------------------

alert("-> Meses: "+months+"\n-> Semanas: "+weeks+"\n-> Dias: "+days);
