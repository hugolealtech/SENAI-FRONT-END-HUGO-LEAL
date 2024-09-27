var clientes = []  //passo 01

class Cliente {

    constructor(nome, cpf, nConta,email,credito){ // Passo 02 - tirou o saldo do constructor e atribuiu 0 para conta nova

        this.nome = nome;
        this.cpf = cpf;
        this.nConta = nConta;
        this.email = email;
        this.saldo = 0;
        this.credito = credito;

        this.fazerCompra = function(valor){}//passo 3

        this.transferir = function(valor,cliente){}

        this.receber = function(valor,cliente){}
    }

    // receber = function(valor,cliente){}// posso criar métodos fora do constructor
}

function mostrarClientes(){

    document.querySelector("#lista").innerHTML = ``//limpa lista tirar o += para =
    
    clientes.forEach(cadaCliente => {

        document.querySelector("#lista").innerHTML += `

            <div class="cliente">

                <p>${cadaCliente.nome}</p>   
                <p>${cadaCliente.cpf}</p>         
                <p>${cadaCliente.email}</p>
            
            </div>      
        
        `
        
    });
}

function cadastrarCliente(){

    let nome = document.querySelector("#nome").value;
    let cpf = document.querySelector("#cpf").value;
    let nConta = document.querySelector("#nConta").value;
    let email = document.querySelector("#email").value;
    let credito = document.querySelector("#credito").value;


    clientes.push (new Cliente (nome,cpf,nConta,email,credito));

mostrarClientes();
}

document.querySelector("#cadastrar").addEventListener('click',cadastrarCliente)
