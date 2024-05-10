// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.

function ex_dia_semana() {
    let diasemana = (prompt("Aperte um número de 1 a 7 numerar um dia da semana"))

    switch (diasemana) {

        case "1":
            console.log("Segunda-feira")
            break;

        case "2":
            console.log("Terça-feira")
            break;

        case "3":
            console.log("Quarta-feira")
            break;

        case "4":
            console.log("Quinta-feira")
            break;

        case "5":
            console.log("Sexta-feira")
            break;

        case "6":
            console.log("Sábado")
            break;

        case "7":
            console.log("Domingo")
            break;

        default:
            diasemana = (prompt("Inválido, Digite outro:"))
            break;
    }

    console.clear

}

function ex_tabuada() {
    let num = parseInt(prompt("Digite um número para \n visualizar sua tabuada até 10:"))

    console.log("A tabuada do número " + num + " é:");

    for (let tab = 1; tab <= 10; tab++) {
        console.log(num * tab);
    }

    console.clear
}

function ex_idade() {
    let idade = parseInt(prompt("Qual a sua idade?"))

    while (idade < 18) {
        idade = parseInt(prompt("😑Qual a sua idade?"))

    }

    console.log("VOCÊ É MAIOR DE IDADEEE!!! 🫡");

    console.clear
}

function ex_regressiva() {
    let num_r = parseInt(prompt("Digite o primeiro número para contagem regressiva"))

    while (num_r >= 0) {
        console.log(num_r)

        num_r--

    }

    console.log("💥💣💥");

    console.clear
}

function ex_indice() {
    let peso = parseFloat(prompt("Qual seu peso em kg?"))
    let altura = parseFloat(prompt("Qual sua altura em metros?"))

    let imc = peso / altura ** 2

    if (imc < 18.5) {
        console.log("Abaixo do peso.")

    } else if (imc >= 18.5 && imc < 25) {
        console.log("Peso normal.")

    } else if (imc >= 25 && imc < 30) {
        console.warn("Sobrepeso.")

    } else if (imc >= 30 && imc < 35) {
        console.warn("Obesidade grau 1!")

    } else if (imc >= 35 && imc < 40) {
        console.error("Obesidade garu 2!!")

    } else if (imc >= 40) {
        console.error("Obesidade grau 3!!!")

    }

    console.clear

}

function ex_decrescente() {
    alert ("Diga três números.")

let n1 = parseInt (prompt("Primeiro número:"))
let n2 = parseInt (prompt("Segundo número:"))
let n3 = parseInt (prompt("Terceiro número:"))

if (n3 > n2 && n2 > n1) {
    console.log("Os números estão em ordem crescente!")
    
}else {
    console.error("Os números não estão em ordem crescente!")
}
    
}

let menu = prompt("Escolha qual exercício deseja visualizar: \n🙃(Digite o número do respectivo item) \n👌(Digite '0' para sair do menu) \n                     1️⃣ Ex. Dias da Semana📆 \n                     2️⃣ Ex. Da Tabuada❌ \n                     3️⃣ Ex. Sobre Idade🧓👵 \n                     4️⃣ Ex. Contagem Regressiva ...💥 \n                     5️⃣ Ex. IMC🍕 \n                     6️⃣ Ex. De Ordem Crescente🔢")

while (menu != "0") {

    switch (menu) {

        case "1":
            ex_dia_semana()

            break;

        case "2":
            ex_tabuada()

            break;

        case "3":
            ex_idade()

            break;

        case "4":
            ex_regressiva()

            break;

        case "5":
            ex_indice()

            break;

        case "6":
            ex_decrescente()

            break;
        default:
            alert("Esse exercício não existe!!!")

            break;
    }menu = prompt("Escolha qual exercício deseja visualizar: \n🙃(Digite o número do respectivo item) \n👌(Digite '0' para sair do menu) \n                     1️⃣ Ex. Dias da Semana📆 \n                     2️⃣ Ex. Da Tabuada❌ \n                     3️⃣ Ex. Sobre Idade🧓👵 \n                     4️⃣ Ex. Contagem Regressiva ...💥 \n                     5️⃣ Ex. IMC🍕 \n                     6️⃣ Ex. De Ordem Crescente🔢")

}