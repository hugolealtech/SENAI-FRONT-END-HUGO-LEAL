const APIKEY = "64381065";
const formPesquisa = document.querySelector("form");

formPesquisa.onsubmit = (event) => {
  event.preventDefault();

  var pesquisa = document.querySelector("#inputPesquisa").value;

  if (pesquisa == "") {
    alert("Preencha o campo!");
  } else {
    fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${pesquisa}`)
      .then((result) => result.json())
      .then((dados) => {
        var listaFilmes = dados.Search;

        console.log(listaFilmes);
        listaFilmes.forEach((filme) => {
          document.querySelector("#lista").innerHTML += `

                <div class="card" style="width: 18rem;">
                <img src=${filme.Poster} class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${filme.Title}</h5>
                    <p class="card-text">${filme.Year}</p>
                    
                </div>
            </div>`
        });
     
      });
  }
};
