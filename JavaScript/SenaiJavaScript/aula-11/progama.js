// Manipulação de Dom
const ul = document.querySelector(".itens")
console.log(ul);

//ul.remove() remove a tag Ul
//ul.lastElementChild.remove() remove o ultimo elemento da ul
ul.firstElementChild.textContent = "OLA" //Subistitui o primeiro elemento da ul por um elemento de texto no caso a palavra Ola
ul.children[1].textContent = "Oi"//Muda o itens que esta no espaço da memoria 1

ul.lastElementChild.innerHTML ="Oi"

const button = document.querySelector(".button")
console.log(button)

button.style.background = "red"


//Estudar mais manipulação de Dom no final

