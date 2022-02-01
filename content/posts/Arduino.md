---
layout: "post"
titulo: Arduino
date: 2019-02-07 09:02
categories: "42"
imagem: images/arduino.jpg
descricao: Como iniciar com o Aruino
ativo: sim
---


## Arduíno

Arduíno é uma plataforma de prototipagem, ou seja, ele foi idealizado para servir de base para diferentes projetos que necessitem de circuitos eletrônicos microcontrolados, baseados em linguagem de programação C/C++. 
O microcontrolador é um pequeno computador que num único circuito integrado, já com núcleo de processador, memória e pinos de entrada e saída de informação.
O Arduíno foi desenvolvido na cidade de Ivrea na Itália, o time era composto por Massimo Banzi, David Cuartielles, Tom Igoe, Gianluca Martino e David Mellis, com o objetivo de interagir com projetos escolares de maneira mais fácil e resiliente do que os sistemas de prototipagem dá época (2005).
O sucesso do Arduíno foi tão grande que logo que foi projetado começou a ser comercializado e venderam mais de 50 mil unidades, e um [documentário](http://vimeo.com/18539129) foi feito para sobre a trajetória do desenvolvimento.


Os pinos de entrada e saída que são numerados podem ser programados para a necessidade e cada projeto, pode-se tanto ligar um led a eles ou um sensor de temperatura. Com a devida programação seleciona-se se esse pino vai ser entrada (no caso do sensor) ou saída (no caso do led). Para fazer isso é necessário basicamente duas etapas, a do hardware e a do software.

### Hardware

O Arduíno originalmente é constituído de um microprocessador Atmel AVR de 8 bits que para ligar é necessária uma fonte de alimentação recebe energia externa por uma tensão de, no mínimo, 5 volts e máximo de 35 volts com corrente mínima de 300mA. A placa e demais circuitos funcionam com tensões entre 5 e 3,3 volts. Embutido no Arduíno há ainda um firmware – que combina memória ROM para leitura e um programa gravado neste tipo de memória – carregado na memória da placa controladora, que aceita Windows, Linux e Mac OS X.

<v-img src="images/arduino.jpg" alt="image alt text"></v-img>


### Software

Em termos de software, o Arduíno pode ter funcionalidades desenvolvidas por meio da linguagem C/C++, que utiliza uma interface gráfica escrita em Java. As funções IDE do Arduíno permitem o desenvolvimento de software que possa ser executado pelo dispositivo.
É esquematizado para introduzir a programação para artistas e para pessoas não familiarizadas com o desenvolvimento de software. Inclui um editor de código com recursos de realce de sintaxe, parênteses correspondentes e identação automática, sendo capaz de compilar e carregar programas para a placa com um único clique. Com isso não há a necessidade de editar Makefiles ou rodar programas em ambientes de linha de comando.

<v-img src="images/Arduino_IDE_-_v0011_Alpha.png" alt="image alt text"></v-img>

Tendo uma biblioteca chamada "Wiring", ele possui a capacidade de programar em C/C++. Isto permite criar com facilidade muitas operações de entrada e saída, tendo que definir apenas duas funções no pedido para fazer um programa funcional:[20]

setup() – Inserida no início, na qual pode ser usada para inicializar configuração, e
loop() – Chamada para repetir um bloco de comandos ou esperar até que seja desligada.

Habitualmente, o primeiro programa que é executado tem a simples função de piscar um LED. No ambiente de desenvolvimento, o utilizador escreve um programa exemplo como este:


	// define LED_PIN 13
	int LED_PIN = 13;
	
	void setup () {
	    pinMode (LED_PIN, OUTPUT);     // habilita o pino 13 para saída digital (OUTPUT).
	}
	
	void loop () {
	    digitalWrite (LED_PIN, HIGH);  // liga o LED.
	    delay (1000);                  // espera 1 segundo (1000 milissegundos).
	    digitalWrite (LED_PIN, LOW);   // desliga o LED.
	    delay (1000);                  // espera 1 segundo.
	}
	


Hoje em dia o Arduíno se apresenta com inúmeras facetas, como se trata de um Hardware aberto qualquer um pode copiar seu esquema e construir seu próprio. Originalmente também ele tem outros desenhos, seja adaptados para vestíveis como o Lylipad, versões menores como o Arduíno nano ou ainda para projetos que precisam de muitas entradas/sáidas como o Arduíno Mega.

Uma das melhores maneiras que eu já vi para aprender arduino é o [CodingDojo]({% post_url 2019-02-08-Dojo-Arduino %})

</br>

REF:
<https://pt.wikipedia.org/wiki/Arduino>
<https://www.techtudo.com.br/noticias/noticia/2013/10/o-que-e-um-arduino-e-o-que-pode-ser-feito-com-ele.html>
<https://www.arduino.cc/>

