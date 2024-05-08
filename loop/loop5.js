// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let num1 = 1
let num2 = 0
let num3 = 0

for (let i = 1; i <= 10; i++) {
    console.log(num3);

    num3 = num1 + num2
    num2 = num1
    num1 = num3
}