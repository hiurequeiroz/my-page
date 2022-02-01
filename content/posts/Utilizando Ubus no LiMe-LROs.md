---
layout: post
title:  "Como Usar o Ubus no LiMe/LROs"
date:   2021-02-14 07:40
author: Hiure
categories: redescomunitarias
imagem: images/terminal.png
descricao: Como o pacote de ferramentas Ubus, para mexer em tudo que é configuração no seu libremesh
ativo: sim
---

Uma das maneiras mais poderosas de encontrar informações na sua rede mesh baseada em openwrt é utilizando o [Ubus](https://openwrt.org/docs/techref/ubus). Ele fornece uma [comunicação entre processos](https://pt.wikipedia.org/wiki/Comunica%C3%A7%C3%A3o_entre_processos) do sistema reunindo assim uma base bem completa de informação. Como ele você pode consultar sobre os processos e caracteristicas do seu sistema como também modificalos.


## Iniciando com Ubus

Se simplesmente digitarmos `ubus` no terminal temos uma boa ideia de como ele funciona:

```
root@conteiner:~# ubus
Usage: ubus [<options>] <command> [arguments...]
Options:
 -s <socket>:		Set the unix domain socket to connect to
 -t <timeout>:		Set the timeout (in seconds) for a command to complete
 -S:			Use simplified output (for scripts)
 -v:			More verbose output
 -m <type>:		(for monitor): include a specific message type
			(can be used more than once)
 -M <r|t>		(for monitor): only capture received or transmitted traffic

Commands:
 - list [<path>]			List objects
 - call <path> <method> [<message>]	Call an object method
 - listen [<path>...]			Listen for events
 - send <type> [<message>]		Send an event
 - wait_for <object> [<object>...]	Wait for multiple objects to appear on ubus
 - monitor				Monitor ubus traffic


```

Temos uma sitaxe simples de usar, podemos começar simplesmente com `ubus list`, e ja vamos ter uma ideia de quais processos estão compartilhando informações:

```
root@conteiner:~# ubus list
dnsmasq
hostapd.wlan0-ap
hostapd.wlan0-apname
lime-batman-adv
lime-fbw
lime-groundrouting
lime-location
lime-metrics
lime-openairview
lime-utils
log
network
network.device
network.interface
network.interface.lan
network.interface.lm_net_batadv_dummy_if
network.interface.lm_net_br_lan_anygw_if
network.interface.lm_net_eth0_1_babeld_if
network.interface.lm_net_eth0_babeld_if
network.interface.lm_net_eth1_babeld_if
network.interface.lm_net_eth1_batadv_if
network.interface.lm_net_wlan0_mesh
network.interface.lm_net_wlan0_mesh_babeld_if
network.interface.lm_net_wlan0_mesh_batadv_if
network.interface.lm_net_wlan1_mesh
network.interface.lm_net_wlan1_mesh_babeld_if
network.interface.lm_net_wlan1_mesh_batadv_if
network.interface.loopback
network.interface.wan
network.interface.wan6
network.rrdns
network.wireless
pirania
pirania-app
service
session
system
uci
```

Esses são os serviços que podemos interagir através do servidor `ubusd`. Para saber quais processos/métodos e argumentos passar para cada serviço devemos passar um parametro `-v` e o nome do serviço:

```
root@conteiner:~# ubus -v list lime-utils
'lime-utils' @7d3f82ec
	"get_cloud_nodes":{"no_params":"Integer"}
	"get_community_settings":{"no_params":"Integer"}
	"get_config":{"no_params":"Integer"}
	"set_notes":{"text":"String"}
	"change_config":{"name":"String","ip":"String"}
	"safe_reboot":{"action":"String","value":"String"}
	"get_notes":{"no_params":"Integer"}
	"get_node_status":{"no_params":"Integer"}

```

Nesse exemplo vemos como chamar o `lime-utils` que é um pacote do [libremesh](https://libremesh.org).

## Chamando serviços com o ubus

Vamos aproveitar o exemplo anterior e vamos chamar o serviço `lime-utils`, para isso vamos usar o comando `call`.

```
root@conteiner:~# ubus call lime-utils get_cloud_nodes
{
	"nodes": [
		"alessandra",
		"anapaula",
		"arcanjo",
		"axel",
		"bardaana",
		"conteiner",
		"cpeconteiner",
		"espacoterra",
		"felipe",
		"gateway",
		"katia",
		"lais",
		"luh",
		"marquinhos",
		"potyra",
		"sede",
		"soraya",
		"torredama",
		"torregruta",
		"tvbraga",
		"vanessa",
		"yasmin",
		"ze"
	],
	"status": "ok"
}
```

Esse comando chama o serviço de acordo com os parametros requeridos, como vimos na saida do comando `list` o serviço `lime-utils` tem um argumento que é o `get_cloud_nodes` quem não precisa de nenhum parametro, por isso a linha ficou `ubus call lime-utils get_cloud_nodes`, que nos retorna todos os pontos da rede mesh pelo hostname de cada um.


