1/* passo = entrada de dados

-primeiroN, segundoN, operador


*/

var num1,num2,operador,resultado;



function btnNumero(botao){

    if(num1 != undefined ){

        num2 = Number(botao);
        
    }else{

        num1 = Number(botao);
    }
}console.log(num1,num2)

function btnOperador(botao){

   operador = botao
}

function calcular(){

    switch(operador){

        case "+":

            resultado = num1 + num2;

           return alert(`${num1} + ${num2} = ${resultado}`)
        

        case "-":

            resultado = num1 - num2;
            
        return alert(`${num1} - ${num2} = ${resultado}`)

        case "*":

            resultado = num1 * num2;
            
        return alert(`${num1} X ${num2} = ${resultado}`)
        

        case "/":
            resultado = num1 / num2;
        return alert(`${num1} / ${num2} = ${resultado}`)

        case "=":
            return resultado;
        
        default:

            alert("Digite uma operação!")
    }
}

function resetar(){
    
    num1 = undefined;
    num2 = undefined;
    operador =  undefined;

}
function calculaResultado(){
    return alert(resultado);
}
calcular();