---
layout: post
titulo:  "Como acessar o roteador por ssh"
date:   2020-06-14 19:14
author: Hiure
categories: redescomunitarias
imagem: images/terminal.png
descricao: Dicas preciosas de como calibrar a temperatura do filamento em uma impressora 3d FDM
ativo: sim

---

Para entrar em um roteador por ssh:

- Abra um terminal de comando, conhecido bash e digite:

```sh
$~: ssh root@thisnode.info
```

Com esse comando você vai entrar no roteador que você está conectado.

Se quiser entrar em outro roteador da malha e você conhece o `hostname` pode fazer:

```sh
$~: ssh root@hostname-do-roteador
```

Ou ainda se não sabe o nome do nó pode entrar pelo ip

```sh
$~: ssh root@ip-do-roteador
```

Se você quer entrar em outro roteador que você não sabe nem o nome e nem o ip você pode fazer:

```sh
$~: ssh root@thisnode.info ip n | grep wlan0-mesh
```
Ou se quiser saber o nome também, logue no roteador que você está conectado por ssh e faça:

```sh
:~# ip n | grep wlan0-mesh | mac2bat
```

Vai aparecer uma lista de todos os roteadores conectados pela interface `wlan0-mesh` essa interface não existir você pode estar em um roteador *dualband* que não tem a interface de 2.4ghz ligada. Utilize a interface `wlan1-mesh` e se for um librerouter ainda pode fazer `wlan2-mesh`.

Ou ainda pode utilizar o comando:

```sh
:~# arp | grep wlan0-mesh | mac2bat
```