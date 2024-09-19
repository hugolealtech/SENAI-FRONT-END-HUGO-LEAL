//1-calcule conta, faça uma aplicação js que pegue o número de clientes em uma mesa, o valor total da conta e após isso divida a conta de forma igual a todos os clientes

function ex1(){

    alert("Bem Vindo ao divisor de conta")

    let nClientes = Number(prompt("Digite o número de clientes"));

    let vConta = Number(prompt("Digite o valor da conta"));

    let vContaCliente = vConta / nClientes;

    alert(`O valor a pagar de cada cliente é de R$: ${vContaCliente}`);

}