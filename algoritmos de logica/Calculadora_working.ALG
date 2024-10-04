Algoritmo "semnome"
// Professor: Victor Santos Rohod
// Aluno: HUGO DE OLIVEIRA LEAL 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 22/08/2024
Var


procedimento rNumeros()

inicio

escreva("Digite o primeiro numero:")
leia(n1)

escreva("Digite o segundo numero")
leia(n2)

fimprocedimento

sm,sb,m,d: real
contador:inteiro
opEscolhida: caractere
n1,n2:real
cancelar: logico

Inicio

cancelar <- verdadeiro

 repita
 
 escreval("---------------CALCULADORA--------------------")

 escreval("Escolha a operação que deseja Realizar")
 escreval("Soma --> A")
 escreval("Subtração --> B")
 escreval("Multiplicação --> C")
 escreval("Divisão --> D")
 
  leia(opEscolhida)
  
  se (opEscolhida = "b") entao
  opEscolhida <- "B"
   fimse
   
   se (opEscolhida = "c") entao
  opEscolhida <- "C"
   fimse
   
   se (opEscolhida = "d") entao
  opEscolhida <- "D"
   fimse

   escolha (opEscolhida)
   
   
      caso "A"
        rNumeros()
        sm <- n1 + n2
        escreval("O resultado da soma é: ",sm)
        

      caso "B"
        rNumeros()
        sb <- n1 - n2
        escreval("O resultado da subtração é: ",sb)
        

      caso "C"
        rNumeros()
        m <- n1 * n2
        escreval("O resultado da Multiplicação é: ",m)
        

      caso "D"
        rNumeros()
        d <- n1 / n2
        escreval("O resultado da Divisão é: ",d)
        
      outroCaso
      
       cancelar <- falso
   fimEscolha
   
 ate(cancelar = falso)



Fimalgoritmo