Algoritmo "EXERCICIO04"
// Disciplina  : Lógica de Programação em Desenvolvimento Front-End
// Professor   : Victor Santos Rohod 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 21/08/2024


// 4. Faça um programa utilizando função ou procedimento que leia 5 números e
// informe quantos desses números  são maiores que 10.



Var

procedimento recValor()

  inicio
  contador <- contador +1
  escreva("Infome o", contador, "º numero:")


fimProcedimento


num1, num2, num3, num4, num5,numM, contador:inteiro


Inicio


 
   recValor()
    leia(num1)
    
    se (num1 > 10) entao
     escreval ("Este valor é maior que 10")
     numM <- numM + 1
      fimSe

     recValor()
      leia(num2)
      
        se (num2 > 10) entao
         numM <- numM + 1
          escreval ("Este valor é maior que 10")
           fimSe
      
         recValor()
          leia(num3)
           se (num3 > 10) entao
             numM <- numM + 1
              escreval ("Este valor é maior que 10")
               fimSe
       
        recValor()
         leia(num4)
         
            se (num4 > 10) entao
             numM <- numM + 1
             escreval ("Este valor é maior que 10")
              fimSe
         
          recValor()
           leia(num5)
           
              se (num5 > 10) entao
                numM <- numM + 1
               escreval ("Este valor é maior que 10")
                fimSe
                
                escreval("Relação de números maiores que 10: ",numM)

Fimalgoritmo