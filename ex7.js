/* Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague. 
Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
aplique um desconto de acordo com o valor total da compra. Siga a tabela: 

Valor total da compra até R$ 100,00: sem desconto.

Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.

Valor total da compra acima de R$ 200,00: desconto de 20%.

Exiba o valor final da compra com o desconto aplicado. */

let valor = parseFloat (prompt("Qual o valor total da sua compra?"))

if (valor <= 100 ) {
    console.log("Sem desconto. Pagará "+ valor + "R$")
    
}else if (valor > 100 && valor <= 200) {
    let desconto1 = valor * 0.9

    console.log("Devido o desconto de 10% você pagará "+ desconto1 + "R$")

}else if (valor >200) {
    let desconto2 = valor * 0.8

    console.log("Devido o desconto de 20% você pagará "+ desconto2 + "R$")
}