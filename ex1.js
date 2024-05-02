//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. 
//Verifique se o nome de usuário é "admin" e a senha é "senha123". 
//Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

let username = prompt ("Digite um nome de usuário: ")
let senha = prompt ("Digite a senha: ")

if (username == "admin" && senha === "senha123") {
    console.log("Login bem sucedido!")

}else {
    console.error("Você não tem permissão de acesso.")
}

