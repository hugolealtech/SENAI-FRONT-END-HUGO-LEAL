var vTotal = null

function explicacao01(){

    if(true){
        console.log("Estou no IF");
    }
    else{
        console.log("Estou no Else");
    }

   let idade = Number(prompt("Qual é a sua idade?"));

    if(idade < 18){
        alert("Entrada não permitida!");
        location.href = "https://www.google.com" //joga o user para outra págima
    }else{
        alert("Entrada permitida");
        location.reload();//recarrega a pagina
    }

}

function explicacao02(){

    const emailAdmin = "admin@gmail.com"
    const senhaAdmin = "123"

    alert("Seja bem Vindo ao sistema Senai");

    let email = prompt("Digite o e-mail");
    let senha = prompt("Digite a senha");

    // = atribuição
    // == comparação de conteúdo
    // === comparação de conteúdo e tipo
    // != não igual (diferente)
    // & equivale ao 'e')
    // || (equivale ao 'ou')

        if(email == emailAdmin & senha == senhaAdmin){
            alert(`Você é admin! seu login é ${email} e senha é ${senha}`)
        }else{
            alert("Usuário ou senha incorretos! Tente novamente!");

            let repete = confirm("Deseja tentar Novamente!");

            if (repete){

             explicacao02()
        
            }
        }

}

function explicacao03(){
    alert("Bem vindo à Lojinha!");
    let opcao = prompt("A) Camisa B) Calça C) Sapato");

    //escolha(opcao) caso "a"

    switch(opcao){
        case "A":
            alert("Você escolheu Camisa");
            break
        case "B":
            alert("Você escolheu Calça!");
            vTotal = 100
            break
        case "C":
            alert("Você escolheu Sapato");
            break
        default:
            alert(`A opção ${opcao} não é válida`);
            let repete = confirm("Deseja tentar novamente?");

            if(repete){
                explicacao03();
            }
        }
}

function exercicio01(){

    alert("Exercicio 01 - Natação -");

    let idadeInformada = parseInt(prompt("Informe sua idade:"));


    if(idadeInformada > 0 & idadeInformada <= 15){
        alert(`Idade informada ${idadeInformada}. Sua categoria é Infantil`);

    }else if(idadeInformada > 15 & idadeInformada <= 30){
        alert(`Idade informada ${idadeInformada}. Sua categoria é a de  Jovens e adultos`);

    }else if(idadeInformada > 30 & idadeInformada <= 60){
        alert(`Idade informada ${idadeInformada}. Sua categoria é Adulta`);

    }else if(idadeInformada < 0 & idadeInformada > 150){
        alert(`Idade informada ${idadeInformada}.Sua categoria é Idoso`);

    }else{
        alert(`A idade ${idadeInformada} é invalida!`);
    }
}

function exercicio02(){

    alert("Exercicio 02 - Calculadora -");
    let opcao = prompt("A) Soma; B) Subtração; C) Multiplicação; D) Divisão");

            let num01 = Number(prompt("Digite o primeiro número: "));
            let num02 = Number(prompt("Digite o segundo número: "));

    switch(opcao){
        
        case "A":            
            alert(`O resultado da soma de ${num01} e ${num02} é ${num01 + num02}`);
            break;
        case "B":
            alert(`O resultado da subtração de ${num01} e ${num02} é ${num01 - num02}`);
            break;
        case "C":
            alert(`O resultado da Multiplicação de ${num01} e ${num02} é ${num01 * num02}`);
            break;
        case "D":
            alert(`O resultado da Divisão de ${num01} e ${num02} é ${num01 / num02}`);
            break;
        default:
            alert(`O valor ${opcao} é inválida!`);

            let repete = confirm("Deseja tentar novamente?");

            if(repete){

                exercicio02();
            }
    }
}