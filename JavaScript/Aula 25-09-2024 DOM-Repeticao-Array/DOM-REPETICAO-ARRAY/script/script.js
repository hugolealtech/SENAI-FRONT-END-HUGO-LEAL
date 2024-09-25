function teste(){

 /*
 documet = refere ao documento html
 getElement = buscar um elemento (id, class, tag)
 .value = buscar o valor dentro do input
 
 
 */   

var inputTeste = document.getElementById("inputTeste").value;

// .innerHTML = colocar algo dentro do elemento com tags
// .innerText = colocar algo dentro do elemento apenas com texto

// se = ele desocupa a variável. se =+ ele add outra sem apagar o valor anterior
document.getElementById("resposta").innerHTML += ` 

    <div class="elementos">
        ${inputTeste}
    </div>
`
}

function repeticao(){

    /*enquanto (condicao) faca fimEnquanto
    let contador = 0
    */

    let contador = 0;
    while(contador <= 10){
        document.getElementById("resposta2").innerHTML += "*"
        contador++

    }

    for(let i = 0; i <= 50; i++){
        document.getElementById("resposta2").innerHTML += `<br> Eu não devo piçar a escola = ${i}<br> `;
    }

}

function lista(){

   /* var arrayComen = Array()

    arrayComen[0] = "info"
    arrayComen[1] = "info"...*/

    // ............................................................


    var livros = [true,"string", 100,[]]
    console.log(livros[2])

    // .............................................................

    var listaProdutos = ['Livros', 'Revistas', 'Apostilas'];

     console.log(listaProdutos)

    listaProdutos.forEach(produto => {

        document.getElementById("resposta3").innerHTML += `
        
            <div class="elementos">

                <h1>${produto}</h1>

            </div>
        
        `       
    });
    
}



