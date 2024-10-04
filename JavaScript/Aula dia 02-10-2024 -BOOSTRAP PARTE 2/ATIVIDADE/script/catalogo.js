var catalogo = [];
var carrinho = [];
var id = 0;

class Produto {
  constructor(id, imgSrc, titulo, desc, valor) {
    this.id = id;
    this.imgSrc = imgSrc;
    this.titulo = titulo;
    this.desc = desc;
    this.valor = valor;
  }
}

catalogo.push(
  new Produto(
    0,
    "../images/products/productImage.png",
    "Coleira",
    "Coleiras confortáveis para o seu melhor amigo!",
    "100,00"
  )
);

function mostrarCatalogo() {
  catalogo.forEach((cadaProduto) => {
    document.querySelector("#catalogo").innerHTML += `

            <div class="card p-2 text-center" style="width: 20rem; border-radius: 0%;">
                <img style="border-radius: 0%;" src="${cadaProduto.imgSrc}" class="card-img-top" alt="Um cachorro usando coleira">
                <div class="card-body">
                    <h4 class="card-title" style="color: var(--laranja);">${cadaProduto.titulo}</h4>
                    <p class="card-text">${cadaProduto.desc}</p>
                    <h5 class="card-title" style="color: var(--verde);">R$ ${cadaProduto.valor}</h5>
                    <button type="button" class='btn btn-primary' data-bs-toggle="offcanvas" data-bs-target="#carrinho" aria-controls="offcanvasExample">
                        COMPRAR
                    </button>
                </div>
            </div>
    
    `;
  });
}

mostrarCatalogo();
