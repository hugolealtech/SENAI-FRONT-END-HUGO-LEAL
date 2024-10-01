console.log(document.getElementById("meu-formulario"))
console.log(document.getElementByIdTagName("li"))
console.log(document.getElementsByClassName("item"))
console.log(document.querySelector("li"))
console.log(document.querySelectorAll("#meu-formulario"))
console.log(document.querySelector(".item"))

const itens = document.querySelectorAll(".item")
itens.forEach((item)=> console.log(item)) 
