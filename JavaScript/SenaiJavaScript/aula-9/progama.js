class Pessoa {
    constructor(nome,sobrenome,dataDenascimento){
        this.nome = nome
        this.sobrenome = sobrenome
        this.dataDenascimento = new Date(dataDenascimento)
    }
}


// Criando uma instancia da classe Pessoa
class Cliente extends Pessoa {
//Constructor da classe Cliente
    constructor(nome,sobrenome,dataDenascimento,saldo){
        super(nome,sobrenome,dataDenascimento);
        this.saldo = saldo
    }
}
//Criando uma instâcia da classe clients
const cliente1 = new Cliente("Pedro","Souza","1-1-90",1000)
console.log(cliente1);
console.log(cliente1.nome)
console.log(cliente1.sobrenome)
console.log(cliente1.dataDenascimento)
console.log(cliente1.saldo)
