// /* primeira opção */

// var btnTema = document.getElementById("btnTema").addEventListener('click',function(){

//     if(btnTema )

// });

// /*segunda opção*/

// var btnTema = document.querySelector("#btnTema").addEventListener('click',function(){ /*querySelector é genérico, por isso precisa no parâmetro #btnTema */

//     if(btnTema )

// });

// /* terceira opção */

var btnTema = document.getElementById("btnTema");

btnTema.addEventListener('click', trocarTema);

function trocarTema(){

    let body = document.querySelector('body');
    let btnTemaImg = document.querySelector("#btnTemaImg")

    if(body.getAttribute("data-bs-theme") == "dark"){ /*hasAttribute vê se tem atributo */

    
        body.setAttribute("data-bs-theme" , "light");
        btnTema.classList.remove("btn-outline-light");/* da classlist remova o atributo ("btn-outline-light") */
        btnTema.classList.add("btn-outline-dark"); /*da classlist adicione o atributo  ("btn-outline-dark") */
        btnTemaImg.setAttribute("src", "/img/icons/moon-stars.svg");
        btnTemaImg.classList.replace("btn-outline-light","btn-outline-dark");
            

    }else{
        body.setAttribute("data-bs-theme", "dark");
        btnTema.classList.remove("btn-outline-dark");
        btnTema.classList.add("btn-outline-light");
        btnTemaImg.setAttribute("src", "/img/icons/sun-fill.svg");
        btnTemaImg.classList.replace("btn-outline-dark","btn-outline-light")
    }

       
};

// hasAtributes =  verifica se tem atributo;
// getAtributes = recebe o valor do atributo;
// setAtributes = seta um novo atributo ou o substitui
// https://www.w3schools.com/jsref/prop_element_classlist.asp

