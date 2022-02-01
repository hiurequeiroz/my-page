---
layout: post
titulo:  "Monitorando tráfego via interface de monitoramento"
date:   2021-02-15 07:40
author: Hiure
categories: redescomunitarias
imagem: images/terminal.png
descricao: Como uma interface de monitoramento para debugar algum problema cabulos na rede mesh, baseado em libremesh
ativo: sim
---

As vezes é muito difícil debugar uma rede que tem uma conexão de banda muito lenta, quando rodamos um comando fica horas para retornar e nunca da para saber se o comando ta rodando ou a conexão caiu.

Uma maneira de debugar uma rede mesh a distancia e muito leve é criando uma interface de monitoramento e depois capturar um arquivo `.dump` para analisar em outra maquina.

## Criando interface de monitoramento

Para cirar uma interface de monitoramento vamos usar o comando [iw](https://wireless.wiki.kernel.org/en/users/documentation/iw
)

`root@conteiner:~# iw dev wlan0-mesh interface add fish0 type monitor flags none`

Agora precisamo ativar essa interface com:

`root@conteiner:~# ifconfig fish0 up`


## Capturando trafego

Para capturar o tráfego vamos usar o comando [tcpdum](https://www.tcpdump.org/manpages/tcpdump.1.html)

`root@conteiner:~# tcpdump -i fish0 -s 65000 -p -U -w  /tmp/fishing.dump`

Depois é só copiar o arquivo para sua maquina:

`root@conteiner:~# scp /tmp/fishing.dump hiure@pop-os:~`

E então analizar com wireshark.