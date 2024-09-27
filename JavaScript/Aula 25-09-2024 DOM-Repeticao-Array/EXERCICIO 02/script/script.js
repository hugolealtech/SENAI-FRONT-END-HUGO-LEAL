

 document.getElementById("enviaNumero").addEventListener('click',function (){

    numEntrada = document.getElementById("tabuadaDesejada").value;
    var resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

 

   for(var i = 0; i <= 2; i++){

    var li = document.createElement('li');


    li.className = 'tabuada';

    li.textContent = `${i} X ${numEntrada} = ${i * numEntrada}`;

    resultado.appendChild(li);

   }
    



   });
