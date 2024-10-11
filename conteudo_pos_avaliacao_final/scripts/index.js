const cadastarBtn = document.getElementById("cadastrar");

cadastarBtn.addEventListener('click', cadastrar);



function cadastrar(){

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    localStorage.setItem(`email`,email)//recebe dois atributos. QUal éo item e seu valor. Só recebem string    
    localStorage.setItem(`senha`, senha) //nunca faça em projeto sério. Precisa ser criptografada por outro componente...

    if(localStorage != null){
        alert("Dados Salvos");
    }
}