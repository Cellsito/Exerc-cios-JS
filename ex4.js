/* Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0. */

let nt1 = parseFloat(prompt("Digite a primeira nota do aluno:"))
let nt2 = parseFloat(prompt("Digite a segunda nota do aluno:"))
let nt3 = parseFloat(prompt("Digite a terceira nota do aluno:"))
let nt4 = parseFloat(prompt("Digite a quarta nota do aluno:"))

let soma = nt1 + nt2 + nt3 + nt4
let media = soma / 4

if (media >= 7.0) {
    console.log("APROVADO!!!")
    
}else if (media >=5.0) {
    console.warn("RECUPERAÇÃO!!!")

}else {
    console.error("REPROVADO!!! >:(")
}