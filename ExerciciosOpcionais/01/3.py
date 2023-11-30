
# 3)	[ENQUANTO] Crie um programa que leia 6 números inteiros e no final mostre quantos deles são pares e quantos são ímpares.

par     = 0
impar   = 0
rotacao = 0
numero  = 0

while rotacao < 6:

    numero = int(input("Informe o " + str(rotacao+1) + "º número: "))

    if (numero % 2) == 0:
        par += 1
    else:
        impar += 1

    rotacao += 1

print("Pares: "  + str(par))
print("Ímpares:" + str(impar))
