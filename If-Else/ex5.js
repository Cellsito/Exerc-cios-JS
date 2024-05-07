/* Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não. */

alert ("Diga três números.")

let n1 = parseInt (prompt("Primeiro número:"))
let n2 = parseInt (prompt("Segundo número:"))
let n3 = parseInt (prompt("Terceiro número:"))

if (n3 > n2 && n2 > n1) {
    console.log("Os números estão em ordem crescente!")
    
}else {
    console.error("Os números não estão em ordem crescente!")
}