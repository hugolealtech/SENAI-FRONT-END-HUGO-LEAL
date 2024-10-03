Algoritmo "semnome"




Var


user,senha: logico

Inicio

faca

escreval("Informe Login:")
leia(user)
escreval("Digite a Senha")
leia(senha)


 se(user = "ADM") e (senha = "ADM") entao
    acesso <- verdadeiro

     escreval("Bem-vindo!")
fimSe

senao
    escreval("Login ou senha invalidos")
fimSe

ate (acesso = verdadeiro)



Fimalgoritmo