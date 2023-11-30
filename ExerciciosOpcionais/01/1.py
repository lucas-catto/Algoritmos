
#  1)	[FOR] Faça um programa que mostre na tela a seguinte contagem: 
#  6 – 7 – 8 - 9 - 10 - 11 Acabou!


for c in range (12):
    if (c > 5 and c != 12):
        print(c, end=' - ')

    if (c == 11):
        print('Acabou!')
