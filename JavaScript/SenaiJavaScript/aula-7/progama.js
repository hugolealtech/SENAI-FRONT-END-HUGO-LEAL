// Função que recebe um nome e exibe uma saudação.
// Se nenhum nome for passado, usa "fulano" como padrão.
function dizer_ola(nome = "fulano") {
    console.log("Olá " + nome); // Imprime "Olá" seguido do nome.
}

// Chama a função 'dizer_ola' passando "pedro" como argumento.
dizer_ola("pedro");

// Função que se apresenta com nome e idade.
function se_apresentar(nome, idade) {
    // Imprime uma mensagem apresentando o nome e a idade.
    console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos ");
}

// Chama a função 'se_apresentar' passando "Arthur" e 20 como argumentos.
se_apresentar("Arthur", 20);

// Função que cria um nome completo baseado no nome, sobrenome e sexo.
function criar_nome_completo(nome, sobrenome, sexo) {
    // Verifica o sexo e formata o nome completo de acordo.
    if (sexo == "H") {
        return `Sr. ${nome} ${sobrenome}`; // Para homens, prefixo "Sr."
    } else if (sexo == "F") {
        return `Sra. ${nome} ${sobrenome}`; // Para mulheres, prefixo "Sra."
    } else {
        return `${nome} ${sobrenome}`; // Para outros casos, retorna apenas o nome e sobrenome.
    }
}

// Cria um nome completo para Arthur, especificando o sexo masculino.
const nomeCompleto = criar_nome_completo("arthur", "albuquerque", "H");

// Cria um nome completo para Maria, especificando o sexo feminino.
const nomeCompleto2 = criar_nome_completo("Maria", "souza", "F");

// Chama a função 'dizer_ola' passando o nome completo de Arthur.
dizer_ola(nomeCompleto);

// Chama a função 'dizer_ola' passando o nome completo de Maria.
dizer_ola(nomeCompleto2);


// Funções setas (Arrow Function)
// Função que exibe uma saudação "Oi" seguida do nome completo.
const dizer_oi = () => console.log("Oi " + nomeCompleto);
dizer_oi(); // Chama a função 'dizer_oi'.

// Função que exibe "oi" e "Tudo bem?" em linhas separadas.
const dizer_oi_tudo_bem = () => {
    console.log("oi"); // Imprime "oi".
    console.log("Tudo bem?"); // Imprime "Tudo bem?".
}
dizer_oi_tudo_bem(); // Chama a função 'dizer_oi_tudo_bem'.

// Função que soma dois números e retorna o resultado.
const somar = (x, y) => {
    return x + y; // Retorna a soma de x e y.
}

// Chama a função 'somar' com 10 e 15 e armazena o resultado.
const resultado = somar(10, 15);

// Imprime o resultado da soma no console.
console.log(resultado);
