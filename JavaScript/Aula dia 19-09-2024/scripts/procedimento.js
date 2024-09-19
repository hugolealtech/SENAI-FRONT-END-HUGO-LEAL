function procedimento(){
  
   let nome = prompt("Seja Bem vindo!, qual é o seu nome?")

//    alert(nome + "Coloque o primeiro numero a ser somado:")


  let n1 = Number (prompt(`${nome} coloque o primeiro número:`));
  let n2 = parseInt (prompt(`${nome} coloque o segundo número a ser somado:`));

  //Number (), parseInt(), parseFloat() - converte String
  let resultado = n1 + n2;

  alert(`A soma dos números é de ${resultado}`);

  // Erro porque prompt torna tudo em string

}