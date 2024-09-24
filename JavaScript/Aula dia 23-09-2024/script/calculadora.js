var num1 = null;
var num2 = null;
var operador = null;


function CalcNumber(botao){
    alert(`${botao}`);

    if(num1 !== null){
        num2 = Number(botao)
    }else{
        num1 = Number(botao)
    }
   
}

function Requeroperador(btOperador){
    alert(`${btOperador}`);
   operador = btOperador;


}

function calcularResultado(){

    if (operador == "+" ){

       var resultado =  num1 + num2;


    }else if(operador == "-"){
        var resultado = num1 - num2;


    }else if (operador == "*"){
        var resultado = num1 * num2

    }else if (operador == "/"){
        var resultado = num1 / num2
    }
  
    alert(`${num1} ${operador} ${num2} = ${resultado}`);
}       




    

