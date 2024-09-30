
class Carro{

    constructor(marca, modelo,ano,cor,velMaxima){

        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velMaxima = velMaxima;
        this.velMin = 0;
        //this.acelerar = function(){}

        // segundo passo


    }
    acelerar(){

        let acelerarInput = Number(document.querySelector("#acelerarInput").value);

        


        if(acelerarInput <= carro.velMaxima){//se o método fosse no constructor seria this.velMax etc...
            carro.velMin = acelerarInput
            alert("O carro acelerou!");
            mostrarCarro();
        }else{
            alert("Velocidade Máxima ultrapassada!");
            carro.velMin = carro.velMaxima;
            mostrarCarro();
        }
    }

}


//quarto passo
var carro = null;

//terceiro passo
// carro = new Carro(this.modelo, this.marca, this.ano, this.cor, this.velMaxima);


document.querySelector("#cadastrarBtn").addEventListener('click',cadastrar)

function mostrarCarro(){
    document.querySelector("#resultado").innerHTML = `

    
    <div class="container">
        <p>marca</p>
        <p>${carro.marca}</p>
        <hr>

        <p>modelo</p>
        <p>${carro.modelo}</p>
        <hr>

        <p>ano</p>
        <p>${carro.ano}</p>
        <hr>

        <p>cor</p>
        <p>${carro.cor}</p>

        <hr>

        <p>Velocidade Máxima</p>
        <p>${carro.velMaxima}</p>
        <hr>
        
        <p>Velocidade Mínima</p>
        <p>${carro.velMin}</p>
       

        <input id="acelerarInput" type="number">
        <button class="btn btn-primary" id="acelerarBtn" type="button">ACELERAR</button>
    
        <hr>
    </div>

    `
    document.querySelector("#acelerarBtn").addEventListener("click",carro.acelerar)
}





function cadastrar(){ //primeiro passo

let marca = document.querySelector("#marca").value;
let modelo = document.querySelector("#modelo").value;
let ano = document.querySelector("#ano").value;
let cor = document.querySelector("#cor").value;
let velMaxima = document.querySelector("#velMaxima").value;


carro = new Carro("VW","Gol","2000", "preto",200);

mostrarCarro() // você errou porque esqueceu de chamar a função exibir ou o output





}
