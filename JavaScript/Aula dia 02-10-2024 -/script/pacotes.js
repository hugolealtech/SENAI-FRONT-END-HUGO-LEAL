class Pacote{

    constructor(srcImg,local,descricao,preco,pacotes){

        this.srcImg = srcImg;
        this.local = local;
        this.descricao = descricao;
        this.preco = preco;
        this.pacotes = pacotes;
    }


}

var todosPacotes = [];

todosPacotes.push(new Pacote("/img/praia01.jpg", "Nordeste","Melhor comida Brasileira", 350,["Pacote 3 dias", "Pacote 5 dias", "Pacote 10 dias"]));
todosPacotes.push(new Pacote("/img/praia.jpg", "Sudeste","Melhor comida Brasileira", 350,["Pacote 3 dias", "Pacote 5 dias", "Pacote 10 dias"]));
todosPacotes.push(new Pacote("/img/praia01 (3).jpg", "Sudeste","Melhor comida Brasileira", 350,["Pacote 3 dias", "Pacote 5 dias", "Pacote 10 dias"]));
todosPacotes.push(new Pacote("/img/praia01 (4).jpg", "Sudeste","Melhor comida Brasileira", 350,["Pacote 3 dias", "Pacote 5 dias", "Pacote 10 dias"]));

todosPacotes.forEach(cadaPacote  =>{

 document.getElementById("catalogo").innerHTML += `

        <div class="card" style="width: 18rem;">
             <img src="${cadaPacote.srcImg}" class="card-img-top" alt="Nordeste">

            <div class="card-body">
                <h5 class="card-title">${cadaPacote.local}</h5>
                <p class="card-text">${cadaPacote.descricao}</p>
                <p class="card-text">${cadaPacote.pacotes}</p>
                <p class="card-text">${cadaPacote.preco}</p>

                <a  href="#" data-bs-toggle="modal" data-bs-target="#SobrePacote" class="btn btn-primary">COMPRAR PACOTE</a>
            </div>
        </div>
    
    `


});
   
