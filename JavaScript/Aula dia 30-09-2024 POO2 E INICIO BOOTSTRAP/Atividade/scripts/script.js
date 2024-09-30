var carro = [];

class Carro{

    constructor(marca, modelo, cor,veolcidadeMaxima){

        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.velocidadeAtual = 0;
        this.veolcidadeMaxima = veolcidadeMaxima;

        this.acelerar = function(valorAceleracao){};

    }

  
}


function acelerar(valor){}

function cadastrarCarros(){

    let marca = document.querySelector("#marca").value;
    let modelo = document.querySelector("#modelo").value;
    let cor = document.querySelector("#cor").value;
    let velocidadeAtual = document.querySelector("#valocidadeAtual").value;
    let veolcidadeMaxima = document.querySelector("#velocidadeMaxima").value;

    carro.push (new Carro(marca,modelo,cor,velocidadeAtual,veolcidadeMaxima));

    exibirCarrosCadastrados();
}

