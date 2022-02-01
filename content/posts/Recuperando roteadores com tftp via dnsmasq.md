---
layout: post
titulo:  "Recuperando roteadores com tftp via dnsmasq"
date:   2021-02-15 15:40
author: Hiure
categories: redescomunitarias
imagem: images/terminal.png
descricao: Como criar um servidor tftp para recuperar roteador com firmware bricado
ativo: sim
---

Muitas vezes o roteador parece que morreu, e quando isso acontece precisamos fazer algumas mandingas para ressusitar o bixinho.
E a maneira mais conssistente e segura de fazer isso é via tftp, porem existem n maneiras de fazer isso e muitas precisam de milhares de passos e, para mim pelo menos, sempre davam erradas... davam até eu conhecer essa maneira, via dnsmasq (viva meu guro Gui!)

O dnsmasq está presente nos sistemas baseados em linux a muito tempo e servem para resolver nomes, porem ele tem esse adicional ai que cria um servidor tftp de maneira muito simples e integrada ao sistema.


# Guia definitivo do tftp, simples como você nunca viu.

Esse método foi testado utilizando um wdr3500_v1 e um ArcherC5_v1.

## Requisitos:

[dnsmasq](https://packages.debian.org/search?keywords=dnsmasq)
[tcpdump](https://www.tcpdump.org/manpages/tcpdump.1.html)


## - Fixando endereços para o tftp

- Conecte o roteador pelo cabo
- Entre em modo de recuperação no roteador (procure como fazer isso para o seu roteador, normalmente segurando o reset e ligar ele até a luizinha ficar piscando como louca)
- Use o tcpdump para identificar o endereço que o roteador procura: 

`sudo tcpdump -nli eth0`

- Com sistemas baseados em openwrt esse endereço costuma ser:

```
endereço 192.168.0.66
mascara 255.255.255.0
gateway 192.168.0.86
```
- Fixe seu ip conforme acima

## - Criando o servidor tftp


Agora com o ip devidamente fixado novamente monitore a interface de cabo de rede com tcpdum.

`sudo tcpdump -nli eth0`

Procure pela linha onde o roteador pede pelo arquivo, no caso de um Archer C5 V1 com um firmware baseado em Openwrt o nome é `ArcherC5v1_tp_recovery.bin`.
Baixe o firmware factory corresponde ao teu roteador e coloque esse nome nele. 
Copie para na pasta `/tmp`.

Agora com o roteador conectado pelo cabo e com o arquivo devidamente copiado , rode o seguinte comando:


`sudo dnsmasq -d --port=0 \
--enable-tftp --tftp-root=/tmp/ `