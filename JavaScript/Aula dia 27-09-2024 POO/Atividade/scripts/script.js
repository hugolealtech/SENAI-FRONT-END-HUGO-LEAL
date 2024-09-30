// Definindo a classe Carro
class Carro {
    constructor(marca, modelo, cor, velocidadeMaxima, velocidadeAtual) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = velocidadeAtual;
    }

    // Método para verificar se a velocidade atual excede a velocidade máxima
    confereAceleracao() {
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            alert(`A velocidade atual de ${this.velocidadeAtual} km/h excede a potência do motor! Velocidade máxima permitida: ${this.velocidadeMaxima} km/h.`);
        } else {
            alert(`A velocidade atual de ${this.velocidadeAtual} km/h está dentro do limite permitido.`);
        }
    }
}

// Função para criar e cadastrar um novo carro
document.getElementById("cadastrar").addEventListener("click", function() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;
    const velocidadeMaxima = parseFloat(document.getElementById("velocidadeMaxima").value);
    const velocidadeAtual = parseFloat(document.getElementById("velocidadeAtual").value);

    // Validando se os valores numéricos foram inseridos corretamente
    if (isNaN(velocidadeMaxima) || isNaN(velocidadeAtual)) {
        alert("Por favor, insira valores válidos para velocidade máxima e velocidade atual.");
        return;
    }

    // Criando uma instância da classe Carro
    const carro = new Carro(marca, modelo, cor, velocidadeMaxima, velocidadeAtual);
    
    // Salvando o carro criado no localStorage ou outro sistema de armazenamento se necessário
    alert(`Carro ${carro.marca} ${carro.modelo} foi cadastrado com sucesso!`);

    // Exibindo o carro na tela ou manipulando conforme necessário
    document.getElementById("lista").innerHTML = `
        <p>Marca: ${carro.marca}</p>
        <p>Modelo: ${carro.modelo}</p>
        <p>Cor: ${carro.cor}</p>
        <p>Velocidade Máxima: ${carro.velocidadeMaxima} km/h</p>
        <p>Velocidade Atual: ${carro.velocidadeAtual} km/h</p>
    `;
});

// Função para conferir a aceleração do carro cadastrado
document.getElementById("confereAceleracao").addEventListener("click", function() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;
    const velocidadeMaxima = parseFloat(document.getElementById("velocidadeMaxima").value);
    const velocidadeAtual = parseFloat(document.getElementById("velocidadeAtual").value);

    if (isNaN(velocidadeMaxima) || isNaN(velocidadeAtual)) {
        alert("Por favor, insira valores válidos para velocidade máxima e velocidade atual.");
        return;
    }

    // Criando a instância de Carro para verificar a aceleração
    const carro = new Carro(marca, modelo, cor, velocidadeMaxima, velocidadeAtual);
    carro.confereAceleracao();
});
