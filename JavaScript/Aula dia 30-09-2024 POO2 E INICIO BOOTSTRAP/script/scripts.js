class Cliente {
    
    nome;
    cpf;
    nConta;
    email;
    saldo;
    credito;
    fazerCompra(valor) {

        if(this.saldo >= valor){

            this.saldo = this.saldo - valor;
            alert("compra efetuada com sucesso!");

        }else{

            return`saldo insuficiente! A compra de  R$: ${valor} e seu saldo é de R$: ${this.saldo}`;
        }
        
    };
    transferir(valor,cliente){

        if(this.saldo >= valor){

            this.saldo = this.saldo - valor
        return`O valor de R$ ${valor} foi transferido para o usuário ${cliente}`

    }else{
        return `Transferência de ${valor} não pode ser efetuada!
        O saldo R$ ${this.saldo} é insuficiente!` 
    }
        }

        
    receber(valor,cliente){

        this.saldo = this.saldo + valor
        return`O valor de R$ ${valor} foi recebido para o usuário ${cliente}`
    };

}

var cliente1 = new Cliente();

cliente1.nome = "Leonardo"
cliente1.cpf = "006.665.545-78";
cliente1.nConta = "001";
cliente1.email = "umemailmaneirodemais@gmail.com";
cliente1.saldo = 0;
cliente1.credito = 2000;


cliente1.fazerCompra(2000);
console.log(cliente1.transferir(2000));
