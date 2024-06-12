// Atividade 01 - Peso nos planetas

const ler = require('readline-sync');

let peso = ler.questionFloat("Digite seu peso em kilos no planeta Terra: ");

console.log("-------------------- TABELA DE PLANETAS ----------------------");
console.log(" 1. MERCÚRIO \n 2. VÊNUS \n 3. MARTE \n 4. JÚPITER \n 5. SATURNO \n 6. URANO");
console.log("-------------------------------------------------------------------");

let opt = ler.questionInt("=> ");
let result = 0;

switch (opt) {
    case 1:
        result = peso * 0.37;
        console.log(`Seu peso em MERCúRIO é de: ${result} Kilos`);
        break;
    case 2:
        result = peso * 0.88;
        console.log(`Seu peso em VÊNUS é de: ${result} Kilos`);
        break;
    case 3:
        result = peso * 0.38;
        console.log(`Seu peso em MARTE é de: ${result} Kilos`);    
        break;
    case 4:
        result = peso * 2.64;
        console.log(`Seu peso em JÚPITER é de: ${result} Kilos`);
        break;
    case 5:
        result = peso * 1.15;
        console.log(`Seu peso em SATURNO é de: ${result} Kilos`);
        break;
    case 6:
        result = peso * 1.17;
        console.log(`Seu peso em URANO é de: ${result} Kilos`);        
    default:
        console.log("Opção Inválida");
        break;
}