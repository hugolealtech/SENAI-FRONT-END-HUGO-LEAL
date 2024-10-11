

const listarBtn = document.getElementById("listar");
const deletarBtn = document.getElementById("deletar");
const resetarBtn = document.getElementById("resetar")




listarBtn.addEventListener('click', listar);

deletarBtn.addEventListener('click', deletar);

resetarBtn.addEventListener('click', resetar);






// listar

function listar(){

    document.querySelector('#listarEmail').innerHTML = `

    ${localStorage.getItem('email')}    
    
    `
    if(localStorage === null){
        
        document.querySelector('#listarEmail').innerHTML =`
        <p>Não há itens cadastrados!</p>
        `
    }

};

// deletar

function deletar(){

    localStorage.removeItem('email');
    localStorage.removeItem('senha');

    location.reload();

    if(localStorage === null){
      
        alert("Dados Deletados");


    }


};

// resetar

function resetar(){

    localStorage.clear();

};
















// function listarEmailsCadastrados.addEventListener('click',(email,senha){


//     let email = email;
//     let senha = senha;

//     localStorage.getItem(`email`,`${email}`)
//     localStorage.getItem(`senha`,`${senha}`)
// }


//     listarEmailsCadastrados()
