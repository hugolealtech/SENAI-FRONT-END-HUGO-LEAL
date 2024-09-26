// Seleciona os elementos necessários
let botaoAdicionar = document.getElementById("adicionarTarefa");
let listaTarefas = document.getElementById("listaTarefas");

// Adiciona uma tarefa quando o botão é clicado
botaoAdicionar.addEventListener("click", function() {
    let tarefaTexto = document.getElementById("novaTarefa").value; // Pega o texto da tarefa

    // Verifica se o texto da tarefa não está vazio
    if (tarefaTexto !== "") {
        let novaTarefa = document.createElement("li"); // Cria um novo item de lista
        novaTarefa.innerText = tarefaTexto; // Define o texto da tarefa

        // Adiciona um evento de clique para remover a tarefa
        novaTarefa.addEventListener("click", function() {
            listaTarefas.removeChild(novaTarefa); // Remove a tarefa quando clicada
        });

        listaTarefas.appendChild(novaTarefa); // Adiciona a nova tarefa à lista
        document.getElementById("novaTarefa").value = ""; // Limpa o campo de texto
    }
});

document.getElementById('calcular').addEventListener('click',function(){

   

let num1 = document.getElementById('num1').value
let num2 = document.getElementById('num2').value


num1 = parseFloat(num1)
num2 = parseFloat(num2)

if(isNaN (num1) || isNaN(num2)){
    alert("por favor insira um valor valido")
    return
}

let resultado = num1 * num2

document.getElementById('resultado').value = resultado

});
