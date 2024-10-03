
class Card{
    
    
     constructor(srcImgAtividade,titulo,texto,h1Valor){

      this.srcImgAtividade = srcImgAtividade;
      this.titulo = titulo;
      this.texto = texto;
      this.h1Valor = h1Valor;      

    }
}

todosCards = [];

todosCards.push (new Card("images/products/productImage.png","Coleira","Estilo e conforto para seu pet, com ajuste fácil e design moderno.","R$: 100"));
todosCards.push (new Card("images/products/productImage2.png","Comida","Nutrição balanceada e sabor irresistível para manter seu amigo saudável.","R$: 100"));
todosCards.push (new Card("images/products/productImage3.png","Disco de brinquedo","Diversão garantida! Ideal para brincadeiras ao ar livre e interação.","R$: 100"));
todosCards.push (new Card("images/products/productImage4.png","Casinha","Refúgio aconchegante e seguro para seu pet descansar e relaxar.","R$: 100"));


todosCards.forEach(cadaCard => {

    document.getElementById('cards').innerHTML += `

   
            <div class="card" style="width: 18rem;">

            <div id="card-body" class="card-body">
                <img src="${cadaCard.srcImgAtividade}" class="card-img-top" alt="imagemProdutoCard">
                <h5 class="card-title">${cadaCard.titulo}</h5>
                <p class="card-text">${cadaCard.texto}</p>
                <p id="cardValor" class="card-text">${cadaCard.h1Valor}</p>

                <div  class="d-flex  justify-content-center"> 
                  <a  href="#" data-bs-toggle="modal" data-bs-target="#" class="btn btn-primary">VER MAIS</a>
                </div>

             
            </div>
        </div>
    
    
    `
    
});