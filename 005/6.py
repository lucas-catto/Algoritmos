
# // 6) Escreva um programa que leia um valor (N) inteiro, digitado pelo usuário teclado e imprima os N primeiros números ímpares. Exemplo: ditando 5, o programa deverá exibir os 5 primeiros ímpares (1,3,5,7,9).

user  = 7
cont  = 0
contI = 0

while True:
    cont += 1
    if (cont % 2 == 1):
        print(cont)
        contI += 1
        
    if (contI == user): break
