/* Escreva um programa que solicita ao usuário um número de 1 a 7 representando 
um dia da semana e exibe o nome correspondente a esse dia.
Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante. */

let diasemana = (prompt ("Aperte um número de 1 a 7 numerar um dia da semana"))

switch (diasemana) {

    case "1":
        console.log("Segunda-feira")
        break;
        
    case "1":
        console.log("Terça-feira")
        break;

    case "1":
        console.log("Quarta-feira")
        break;    

    case "1":
        console.log("Quinta-feira")
        break;  

    case "1":
        console.log("Sexta-feira")
        break;

    case "1":
        console.log("Sábado")
        break;  

    case "1":
        console.log("Domingo")
        break; 

    default:
        console.error("Esse número não é válido")
        break;
}