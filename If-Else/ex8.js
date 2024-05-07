/* Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
* altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
usuário se encontra, de acordo com a tabela a seguir:

-IMC menor que 18.5: Abaixo do peso
-IMC de 18.5 a 24.9: Peso normal
-IMC de 25.0 a 29.9: Sobrepeso
-IMC de 30.0 a 34.9: Obesidade grau 1
-IMC de 35.0 a 39.9: Obesidade grau 2
-IMC maior ou igual a 40.0: Obesidade grau 3 */

let peso = parseFloat (prompt("Qual seu peso em kg?"))
let altura = parseFloat (prompt("Qual sua altura em metros?"))

let imc = peso / altura ** 2

if (imc < 18.5) {
    console.log ("Abaixo do peso.")
    
}else if (imc >= 18.5 && imc < 25) {
    console.log ("Peso normal.")
    
}else if (imc >= 25 && imc < 30) {
    console.warn ("Sobrepeso.")
    
}else if (imc >= 30 && imc < 35) {
    console.warn ("Obesidade grau 1!")
    
}else if (imc >= 35 && imc < 40) {
    console.error ("Obesidade garu 2!!")
    
}else if (imc >= 40) {
    console.error ("Obesidade grau 3!!!")
    
}

