function imprimeListaLivros(){

   
   var listaLivros = ["Matrix", "Maze Runner", "1984"]
   
    listaLivros.forEach(filme => {

        document.getElementById("telaUsularioLivros").innerHTML += `
        
        <div class="elementos">

            ${filme}
        
        
        </div>

        `
    });
};

function nFunciono(){

    alert("Clique em Resultado");
}


document.getElementById('calcular').addEventListener('click',function(){

   

    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    
    
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    
    let resultado = num1 * num2
    
    document.getElementById('resultado').value = resultado
    
    });
    





