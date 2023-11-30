
# 2)	[FOR] Faça um algoritmo que pergunte ao usuário um número inteiro e positivo e mostre uma contagem até esse valor, marcando com * (asterisco), os números que forem divisíveis por 4: 
# Exemplo: Digite um valor: 35
# Contagem: 1 2 3 *4 5 6 7 *8 ... *32 33 34 35 Acabou!

numero = int(input("Informe um número inteiro: "))

for c in range((numero+1)):
    if (c % 4) == 0:
        print("*" + str(c), end=' ')
    else:
        print(c, end=' ')
print("Acabou!")
