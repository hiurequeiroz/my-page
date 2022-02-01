---
layout: "post"
titulo: Fita Led Endereçavel
date: 2019-02-07 09:33
categories: "42"
imagem: images/fitaledDigital.jpg
descricao: Como usar uma fita led endereçavel com arduino
ativo: sim
---



Basicamente existem dois tipos de fita led, as analógica ou digital. A diferença reside em como elas são controladas

Fitas led Analalógica
---------------------

Elas podem ser de uma única cor ou RGB (combinando graduações de vermelho, verde e azul para obter todo o espectro). Elas são vendidas em rolos e podem ser cortadas em pedaços menores. Cada segmento é marcado por blocos de contato metálico e algumas vezes tem o ícone de uma tesoura onde se deve cortar.

<v-img src="images/fitaledAnalog.jpg" alt="FitaLedAnalogica"></v-img>

Essa fita led por exemplo tem segmentos a cada 5cm e 10 cm, cada segmento contém 3 leds. Normalmente fitas led possuem 30, 32, 60 ou 120 leds por metro, que vai variar com o preço e o consumo de energia.

Cada segmento de led é ligado em série o que aumenta a tensão de trabalho. Todos os segmentos estão ligados em paralelo, de modo que todos estejam submetidos a mesma tensão de trabalho ao longo da fita, mas o consumo de corrente se soma dependendo do comprimento da fita.


<v-img src="images/segmentosSerie.jpg" alt="seg,emtos em serie"></v-img>

Nesse tipo de fita os leds vão sempre operar com a mesmo efeito, seja de fade ou de piscar eles vão permanecer sempre juntos se comportando como fosse um só, por isso eles não são endereçáveis. Um jeito de identifica-los é que eles não tem algum chip.

Fita led digital
----------------

Fitas leds digitais vem com leds RGB e tem um chip na fita que controla os leds individualmente, eles são chamados de individualmente endereçáveis ou apenas endereçáveis.

<v-img src="images/fitaledDigital.jpg" alt="FitaLedDigital"></v-img>


Aqui um exemplo de fita led usando um driver LPD8806. Outros populares muito usado são o driver WS2801 e WS2812 os quais o driver está dentro do próprio LED

<v-img src="images/WS2812.png" alt="FitaLedDigital"></v-img>

Eles também vem em segmentos e podem ser cortados. Essas fitas consomem 5V, então elas podem ser ligadas diretamente no microcontrolador. Elas ligam até mesmo com  3.3V mas sem muito brilho.
 


Biblioteca <https://github.com/adafruit/Adafruit_NeoPixel>


</br>
Referencias
<http://labdegaragem.com/profiles/blogs/tutorial-controle-de-fita-de-led-enderecada>
<https://www.instructables.com/id/Intro-to-LED-Strips/>
<https://www.youtube.com/watch?v=3zuIsZmodFk>

