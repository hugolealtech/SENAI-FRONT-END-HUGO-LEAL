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

function tabuada(){

    // var num1 = 0;
    // var num2 = 0;

     var num1 = getElementById("inputNumber1").value
     var num2 = getElementById("inputNumber2").value

    var resultado = num1 * num2;

    resultado.innerHTML.value = `
    
     <input type="number" name="resultado" id="mostraResultado">
    
    `



}