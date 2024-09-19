//2-Sucessor e antecessor, faça uma aplicação que colete um número digitado pelo usuário e logo em seguida mostre em ordem:
// o numero anterior a ele, o próprio número escolhido e o número sucessor a ele

function ex2(){

    alert("Bem Vindo ao Exercicio 02!")

let numPosition = Number(prompt("Digite um número e informarei a posição dele, seu antecessor e seu sucessor!"));

alert(`O numero antecessor ao ${numPosition} é ${numPosition - 1} e seu número sucessor é ${numPosition + 1}`);
}