// Estruturas Condicionais

// Declaração de duas constantes x e y, ambas iguais a 10
const x = 10;
const y = 10;

// Estrutura condicional if-else para comparar x e y
if (x < y) {
    // Se x for menor que y, imprime que x é menor
    console.log("X é menor que Y");
} else if (x > y) {
    // Se x for maior que y, imprime que x é maior
    console.log("X é maior que Y");
} else {
    // Se x não for menor nem maior que y, imprime que eles são iguais
    console.log("X é igual a Y");
}

// Declaração de uma constante cor com o valor "Verde"
const cor = "Verde";

// Estrutura switch para verificar o valor da variável cor
switch(cor) {
    case "Vermelho":
        // Se cor for "Vermelho", imprime a mensagem
        console.log("a cor é vermelho");
        // Não tem break, então continua para o próximo case
    case "Azul":
        // Se cor for "Azul", imprime a mensagem
        console.log("A cor é azul");
        // Não tem break, então continua para o próximo case
    case "Verde":
        // Se cor for "Verde", imprime a mensagem
        console.log("A cor é verde");
        // Não tem break, então continua para o próximo case
    default:
        // Se não corresponder a nenhum case, imprime a mensagem padrão
        console.log("A cor não é vermelha, nem azul, nem verde");
}

// Estrutura switch corrigida com breaks para evitar fall-through
switch(cor) {
    case "Vermelho":
        console.log("a cor é vermelho");
        break; // Interrompe a execução após o case
    case "Azul":
        console.log("A cor é azul");
        break; // Interrompe a execução após o case
    case "Verde":
        console.log("A cor é verde");
        break; // Interrompe a execução após o case
    default:
        console.log("A cor não é vermelha, nem azul, nem verde");
        break; // Interrompe a execução após o case
}

// Declaração de uma constante sexo com o valor "H"
const sexo = "H";

// Estrutura switch para verificar o valor da variável sexo
switch(sexo) {
    case "H":
    case "h":
        // Se sexo for "H" ou "h", imprime "Homen"
        console.log("Homen");
        break; // Interrompe a execução após o case
    case "F":
    case "f":
        // Se sexo for "F" ou "f", imprime "Mulher"
        console.log("Mulher");
        break; // Interrompe a execução após o case
    default:
        // Se não corresponder a nenhum case, imprime "Invalido"
        console.log("Invalido");
}

// Declaração de uma variável numero
let numero;

// Estrutura condicional if-else para definir o valor de numero
if (cor == "Verde") {
    // Se cor for "Verde", atribui 10 a numero
    numero = 10;
} else {
    // Se cor não for "Verde", atribui 20 a numero
    numero = 20;
}

// Uso do operador ternário para atribuir valor à variável numero2
let numero2 = cor == "Vermelho" ? 10 : 20;
// Se cor for "Vermelho", numero2 será 10, caso contrário, será 20

// Imprime o valor de numero2
console.log(numero2);
