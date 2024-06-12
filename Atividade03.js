const ler = require('readline-sync');

console.log("-------------------- SISTEMA DE CÁLCULO DE NÚMEROS REAIS ----------------------");
console.log("**** Informe número real: ****");
let valor = ler.questionFloat("=> ");

console.log("-------------------- MENU DE OPERAÇÕES ----------------------");
console.log(" 101. Raiz quadrada \n 102. A metade \n 103. 10% do número \n 104. O dobro");
console.log("-------------------------------------------------------------------");
let opt = ler.questionInt("=> ");
let result = 0;

switch (opt) {
    case 101:
        result = Math.sqrt(valor);
        console.log(`RAIZ QUADRADA DO NÚMERO: ${valor}` );
        console.log(`VALOR DA RAIZ QUADRADA: ${result}`);
        break;
    case 102:
        result = valor/2;
        console.log(`A METADE DO VALOR DE: ${valor}`);
        console.log(`VALOR DA METADE: ${result}`);
        break;
    case 103:
        result = valor * 0.1;
        console.log(`10% DO VALOR DE: " ${valor}`);
        console.log(`VALOR DE 10% ${result}`);
        break;
    case 104:
        result = valor * 2;
        console.log(`O DOBRO DO VALOR DE: ${valor}`);
        console.log(`VALOR DOBRADO: ${result}`);
        break;        
    default:
            console.log("Opção Inválida");
            break;
    }