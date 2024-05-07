//Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.

let number = parseInt (prompt("Digite um número:"))

if (number % 2 == 0) {
    console.log("Esse número é par!")
}else {
    console.log("Esse número é ímpar!")
}