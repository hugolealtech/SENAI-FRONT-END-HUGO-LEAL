Algoritmo "Exercicio03_Revisao"
// Disciplina  : L�gica de Programa��o em Desenvolvimento Front-End
// Professor   : Victor Santos Rohod 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 21/08/2024

// 3. Fazer uma calculadora que aceite todas as 4 opera��es (+,-,*,/)

Var
procedimento colheNumeros()

inicio

escreva("escreva o primeiro numero:")
        leia(n1)
        escreval("escreva o segundo numero:")
        leia(n2)

fimProcedimento


 n1,n2:real
soma,subtracao,multiplicacao,divisao : real
operacao:caractere

Inicio

  escreval ("Qual opera��o deseja realizar?")
  
  escreval("A) Soma ")
  escreval("B) Subtra��o ")
  escreval("C) MULTIPLICA��O ")
  escreval("D) DIVIS�O ")
  leia(operacao)
  
  se (operacao = "a") entao
       operacao <- "A"
    fimSe
     se (operacao = "b") entao
           operacao <- "B"
      fimSe
        se (operacao = "c") entao
         operacao <- "C"
        fimSe
          se (operacao = "d") entao
            operacao <- "D"
           fimSe
           
  
  escolha (operacao)
  
    caso = "A"
      colheNumeros()
         soma <- (n1 + n2)
          limpaTela()
           escreval("A soma dos valores �: ", soma)
         
      caso = "B"
      colheNumeros()
         subtracao <- (n1 - n2)
          limpaTela()
           escreval("A subtra��o dos valores �: ", subtracao)

       caso = "C"
       
        colheNumeros()
           multiplicacao <- (n1 * n2)
            limpaTela()
             escreval("A multiplica��o dos valores �: ", multiplicacao)

        caso ="D"
          colheNumeros()
           divisao <- (n1 / n2)
            limpaTela()
             escreval("A divisao dos valores �: ", divisao)
      outrocaso
        escreval("Op��o Inv�lida!")

 fimEscolha
Fimalgoritmo