/* Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é 
maior de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não. */

let nasci = parseInt(prompt("Em qual ano você nasceu?"))

let idade = 2024 - nasci

if (idade >= 18) {
    console.log("Você é maior de idade! :)")
    
}else {
    console.warn("Você é menor de idade!!! O_O")
}