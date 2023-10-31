// 4)	O cardápio de uma casa de lanches é dado pela tabela abaixo:
// ... ... ...
// Escreva um algoritmo que leia os códigos dos itens adquiridos pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. Não será necessário exibir o produto e o valor, somente o valor final. Para FINALIZAR o pedido, o usuário deverá digitar 0 (ZERO).

/*
let produtos = {
    100 : 'Cachorro Quente',
    101 : 'Bauru Simples',
    102 : 'Bauru com Ovo',
    103 : 'Hamburger',
    104 : 'CheeseBurger',
    105 : 'Refrigerante'
}

let preco = {
    100 : '1.70',
    101 : '2.30',
    102 : '2.60',
    103 : '2.40',
    104 : '2.50',
    105 : '1.00'
}
*/
/*
let produtosPreco = {
    100 : {
        Lanche : "Cachorro Quente",
        Preco  : "1.70",
        Codigo : "100"
    },
    101 : {
        Lanche : "Bauru Simples",
        Preco  : "2.30",
        Codigo : "101"
    },
    102 : {
        Lanche : "Bauru com Ovo",
        Preco  : "2.60",
        Codigo : "102"
    },
    103 : {
        Lanche : "Hamburger",
        Preco  : "2.40",
        Codigo : "103"
    },
    104 : {
        Lanche : "CheeseBurger",
        Preco  : "2.50",
        Codigo : "104"
    },
    105 : {
        Lanche : "Refrigerante",
        Preco  : "1.00",
        Codigo : "105"
    }
};

console.log(
    '100 => ' + produtosPreco[100].Lanche + ' - R$' + produtosPreco[100].Preco + "\n" +
    '101 => ' + produtosPreco[101].Lanche + ' - R$' + produtosPreco[101].Preco + "\n" +
    '102 => ' + produtosPreco[102].Lanche + ' - R$' + produtosPreco[102].Preco + "\n" +
    '103 => ' + produtosPreco[103].Lanche + ' - R$' + produtosPreco[103].Preco + "\n" +
    '104 => ' + produtosPreco[104].Lanche + ' - R$' + produtosPreco[104].Preco + "\n" +
    '105 => ' + produtosPreco[105].Lanche + ' - R$' + produtosPreco[105].Preco + "\n" +
    '106 => ' + produtosPreco[106].Lanche + ' - R$' + produtosPreco[106].Preco + "\n"
);
*/

// console.log(produtosPreco[100].Lanche);
// console.log(produtosPreco[100].Preco);
/*
let order;
let orderSize;
let allCodes;
//let size;

while (true) {
    
    alert()
    for (const i in produtosPreco) {

        //size = produtosPreco[i].Lanche.length;

        console.log(produtosPreco[i].Lanche + " - R$" + produtosPreco[i].Preco);
    }

    while (true) {
        order = parseInt(prompt("Quais são seus pedidos: "));

        

        if (order)

        
        if (order == 0) { break; }
    }

    if (order == 0) { break; }
}
*/
/*
console.log("100 => Cachorro Quente . 1.70");
console.log("101 => Bauru Simples ... 2.30");
console.log("102 => Bauru com Ovo ... 2.60");
console.log("103 => Hamburger ....... 2.40");
console.log("104 => CheeseBurger .... 2.50");
console.log("105 => Refrigerante .... 1.00");


alert (
    '100 => Cachorro Quente => 1.70' + '\n' +
    '101 => Bauru Simples   => 2.30' + '\n' +
    '102 => Bauru com Ovo   => 2.60' + '\n' +
    '103 => Hamburger       => 2.40' + '\n' +
    '104 => CheeseBurger    => 2.50' + '\n' +
    '105 => Refrigerante    => 1.00'
);
*/

/*
Resolvi fazer 'na mão' pra fazer os outros exercícios também
*/

let order = "";
let price = 0.0;
let total = 0.0;

while (true) {
    console.log (
        '100 => Cachorro Quente => U$1.70' + '\n' +
        '101 => Bauru Simples   => U$2.30' + '\n' +
        '102 => Bauru com Ovo   => U$2.60' + '\n' +
        '103 => Hamburger       => U$2.40' + '\n' +
        '104 => CheeseBurger    => U$2.50' + '\n' +
        '105 => Refrigerante    => U$1.00'
    );

    while (order != "0") {
        order = prompt("Infome o código dos itens: (0 p/ parar)");
        // console.log(order);
        
        // make the verification if the item exists (later)
        if      (order == "100") { price = 1.7; }
        else if (order == "101") { price = 2.3; }
        else if (order == "102") { price = 2.6; }
        else if (order == "103") { price = 2.4; }
        else if (order == "104") { price = 2.5; }
        else if (order == "105") { price = 1;   }
        else {
            continue;
        }
        total += price;
        // console.log(total);
    }

    console.log("Total Values: U$" + total);
    break;
}
