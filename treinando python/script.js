const senhaCorreta = 'senha123';

function verificarSenha(senhaInserida) {
    if (senhaInserida === senhaCorreta) {
        console.log('Senha correta!');
    } else {
        console.log('Senha incorreta!');
    }
}

// Exemplo de uso:
const senhaDoUsuario = prompt('Digite sua senha:'); // Funciona no navegador
verificarSenha(senhaDoUsuario);
