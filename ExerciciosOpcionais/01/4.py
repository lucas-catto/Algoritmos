
#  4)	[VETOR] Desenvolva um programa que leia 5 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições (índice) eles estão armazenados.

vetor  = []
numero = 0

for c in range(6):
    numero = int(input("Informe o " + str(c+1) + "º número: "))
    vetor.append(numero)

print("Key => Value")
for c in vetor:
    if (c % 2) == 0:
        print(f"{vetor.index(c)} => {str(c)}")
