// 10. Faça um programa que receba um número do usuário e continue a
// pedir o número se o numero for diferente de 0.

let num = parseInt(prompt("Fale um número:"))

while (num != 0) {
    console.error("Isso não é Zero");

    num = parseInt(prompt("Fale outro número:"))
    
}

console.log("Esse número é ZERO! :3");