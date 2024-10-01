// Functions de Ordem Maior
// Array de números
const numeros = [1, 2, 3, 4, 5];

// Método forEach: executa uma função para cada elemento do array.
numeros.forEach(function(numero) {
    console.log(numero); // Imprime o número atual do array.
});

// Array de letras 
const letras = ["A", "B", "C", "D", "E"];
letras.forEach(function(letra, indice) {
    // Imprime o índice e a letra correspondente no formato "índice: letra".
    console.log(`${indice}: ${letra}`); // Exemplo de saída: "0 : A", "1 : B".
});

// Array de tarefas, cada uma com ID, texto e status de complemento.
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
        texto: "Jantar com a esposa", // Descrição da tarefa
        complemento: true, // Status indicando que a tarefa foi concluída
    }
];

// Usa forEach para iterar sobre as tarefas.
tarefas.forEach(function(tarefa, indice, minhasTarefas) {
    // Imprime o índice (mais 1), a tarefa e seu texto.
    console.log(`${indice + 1}: ${tarefa.texto}`); // Corrigido para acessar 'texto' corretamente.
    console.log(minhasTarefas); // Exibe o array completo de tarefas.
});

// Usa map para criar um novo array contendo apenas os textos das tarefas.
const vetorDeTextoDasTarefas = tarefas.map(function(tarefa) {
    return tarefa.texto; // Retorna o texto de cada tarefa.
});

// Imprime o array de textos das tarefas.
console.log(vetorDeTextoDasTarefas);

// Usa filter para encontrar tarefas com ID igual a 1.
const tarefas1 = tarefas.filter(function(tarefa) {
    return tarefa.id === 1; // Retorna as tarefas que atendem à condição.
});

// Imprime as tarefas filtradas.
console.log(tarefas1);

// Array de números para a operação de redução.
const vetor = [1, 2, 3, 4];
const valorInicial = 0; // Valor inicial para a soma.

// Usa reduce para somar todos os elementos do array.
const soma = vetor.reduce(function(acumulador, elementoAtual) {
    return acumulador + elementoAtual; // Retorna a soma do acumulador e do elemento atual.
}, valorInicial);

// Imprime o resultado da soma.
console.log(soma);
