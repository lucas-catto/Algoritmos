// 2.	Elaborar um programa que apresente o valor da conversão em real (R$) de um valor lido em dólar (US$). O programa deve solicitar o valor da cotação do dólar.

var real  = parseFloat(prompt("Informe um valor: R$"));
var dolar = parseFloat(prompt("Informe um valor: U$"));

alert("U$: "+dolar+"\nR$: "+real+"\n" + real * dolar);