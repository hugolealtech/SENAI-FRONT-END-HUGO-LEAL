// Estrutura de repetição
// 'While' é uma estrutura de controle que executa um bloco de código enquanto a condição for verdadeira.
let contador = 0; // Inicializa a variável contador com zero.
while (contador < 3) { // Enquanto contador for menor que 3, execute o bloco.
    console.log("miau"); // Exibe "miau" no console.
    contador = contador + 1; // Incrementa o contador em 1 a cada iteração.
}

// 'For' é outra estrutura de repetição que itera um número específico de vezes.
for (let i = 0; i < 10; i++) { // Inicializa 'i' em 0 e continua enquanto 'i' for menor que 10, incrementando 'i' em 1 a cada iteração.
    console.log(`Numero de repetição for: ${i}`); // Exibe o número da iteração atual no console.
}
// Criação de um array de objetos chamado 'tarefas'.
// Cada objeto representa uma tarefa com um ID, um texto descritivo e um status de complemento (concluído ou não).
// Criação de um array de objetos chamado 'tarefas'.
// Cada objeto representa uma tarefa com um ID, uma descrição e um status de conclusão.
const tarefas = [
    {
        id: 1, // ID único da tarefa
        texto: "Tirar o lixo", // Descrição da tarefa
        complemento: false, // Status indicando que a tarefa não foi concluída
    },
    {
        id: 2, // ID único da tarefa
        texto: "Reunião com chefe", // Descrição da tarefa
        complemento: true, // Status indicando que a tarefa foi concluída
    },
    {
        id: 3, // ID único da tarefa
        texto: "jantar com a esposa", // Descrição da tarefa
        complemento: true, // Status indicando que a tarefa foi concluída
    }
];

// Loop para iterar sobre cada tarefa no array 'tarefas'.
for (let i = 0; i < tarefas.length; i++) {
    // Exibe no console o ID da tarefa e o texto da tarefa correspondente.
    console.log(`tarefa ${tarefas[i].id}: ${tarefas[i].texto}`);
}


