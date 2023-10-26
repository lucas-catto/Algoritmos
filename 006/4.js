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

let produtosPreco = {
    100 : {
        'Lanche' : 'Cachorro Quente',
        'Preco'  : '1.70'
    },
    101 : {
        'Lanche' : 'Bauru Simples',
        'Preco'  : '2.30'
    },
    102 : {
        'Lanche' : 'Bauru com Ovo',
        'Preco'  : '2.60'
    },
    103 : {
        'Lanche' : 'Hamburger',
        'Preco'  : '2.40'
    },
    104 : {
        'Lanche' : 'CheeseBurger',
        'Preco'  : '2.50'
    },
    105 : {
        'Lanche' : 'Refrigerante',
        'Preco'  : '1.00'
    }
};


// console.log(produtosPreco[100].Lanche);
// console.log(produtosPreco[100].Preco);

let order;
let orderSize;
let allCodes;
//let size;

while (true) {
    
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
