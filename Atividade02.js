const ler = require('readline-sync');

console.log("-------------------- SISTEMA DE COMPRAS ----------------------");
console.log("**** Informe o valor da compra: ****");
let valor = ler.questionFloat("=> ");

console.log("-------------------- MENU TIPOS DE CLIENTE ----------------------");
console.log(" 1. COMUM \n 2. FUNCIONÁRIO \n 3. VIP");
console.log("-------------------------------------------------------------------");
let opt = ler.questionInt("=> ");
let result = 0;

switch (opt) {
    case 1:
        result = valor;
        console.log("COMUM: SEM DESCONTO");
        console.log(`VALOR FINAL PARA CLIENTE COMUM: R$ ${result.toFixed(2)}`);
        
        break;
    case 2:
        result = valor -= valor * 0.1;
        console.log("FUNCIONÁRIO: DESCONTO DE 10%");
        console.log(`VALOR FINAL PARA FUNCIONÁRIO: R$ ${result.toFixed(2)}`);

        break;
    case 3:
        result = valor -= valor * 0.05;
        console.log("VIP: DESCONTO DE 5%");
        console.log(`VALOR FINAL PARA CLIENTE VIP: R$ ${result.toFixed(2)}`);
        break;
    default:
            console.log("Opção Inválida");
            break;
    }