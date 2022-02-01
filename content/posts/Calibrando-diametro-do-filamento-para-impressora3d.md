---
layout: "post"
titulo: Calibrando diâmetro do filamento para impressão 3D
date: 2019-01-28 01:02
categories: impressora3d
imagem: images/filamento3d.jpeg
descricao: Dicas preciosas de como calibrar a espessura do filamento para imprimir
ativo: sim
---

Para calibrar o filamento vamos precisar de um paquimetro.
O paquimetro é uma ferramenta impressindivel para quem quer usar impressora 3D. Não é uma ferramenta muito barata, mas compensa muito se você está pensando em ter uma impressora devidamente calibrada, sobre tudo se quer modelar peças.

## 1.1 Calculando o diametro médio do filamento

Pegue o rolo de filamento e estique ele por volta de 1m (isso porque ele pode variar muito dentro nesse intervalo)

Faça pelo menos 6 medidas ao londo dessa distância, e para cada medida anote o valor nas duas direções do filamento, `x` e `y`.


<v-img src="images/paquimetro.png" alt="Paquimetro"></v-img>



Dica: Use sempre o meio do paquimetro para evitar medidas viciadas.

Faça uma tabela para calcular o diametro médio do filamento.

| n | x | y |
|-----------|
| 1 |x1 | y1|
| 2 |x2 | y2|
| 3 |x3 | y3|
| 4 |x4 | y4|
| 5 |x5 | y5|
| 6 |x6 | y6|
|---|---|---|
|Média|$$\frac{\sum_{n=1}^{6}x_{n}}{6}$$|$$\frac{\sum_{n=1}^{6}y_{n}}{6}$$|
|-----------|

Não se assuste, essa formula para a média é uma maneira mais elegante do que escrever `soma tudo e divide por 6`

Assim a média total deve ser:

$$Média total = \frac{\frac{\sum_{n=1}^{6}x_{n}}{6}+\frac{\sum_{n=1}^{6}y_{n}}{6}}{2}$$


Pronto, depois de toda essa volta (e muita pesquisa e aprendizado aqui para saber como colocar [equação com markdown](http://csrgxtu.github.io/2015/03/20/Writing-Mathematic-Fomulars-in-Markdown/) achamos o valor médio para o filamento.
Note que se houver muita diferença de x e y você tem um péssimo filamento em mãos e isso pode prejudicar bastante a qualidade da impressão.

## 1.2 Calculando o multiplicador de extrusão

O [multiplicador de extrusão]() é uma correção extra que devemos calibrar para a espessura impressa seja exatamente aquela que a sua peça tem.

Com o valor médio do filamento vamos fazer uma impressão de teste, um [cubo padrão](). Esse cubo tem a parede de 0,4mm e é utilizada para calcular o multiplicador de extrusão. O que se faz é imprimir esse cubo com as configs pré determinadas para calibragem com o valor medio da espessura do filamento que achamos e depois medimos o valor real, dividimos o valor esperado pelo real e mutiplicamos pelo mutiplicador anterior.

$$ E_m=\frac{Ø}{Ø_e}*E_a $$

onde:

$$ E_m $$ - Multiplicador de extrusão (ou Extrusion multiplier)

$$ Ø $$ - é a espessura da parade da caixa

$$ Ø_e $$ - foi o valor encontrado para a espessura da caixa

$$ E_a $$ - foi o extrusion multiplier utilizando que se obteve a espessura medida

ou seja

$$ E_m=\frac{espessura(real)}{espessura(encontrada)}*Extrusion-mutiplier(usado) $$

Agora repita o procedimento com o novo valor de $$ E_m $$ (extrusion mutiplier) e repita os calculos.

</br>

### Referências:

[https://www.3dhubs.com/talk/t/howto-calibrate-tune-and-fine-tune-your-printer-and-filament/5695](https://www.3dhubs.com/talk/t/howto-calibrate-tune-and-fine-tune-your-printer-and-filament/5695)

[http://print.theporto.com/posts/how-to-calibrate-extrusion-thickness/](http://print.theporto.com/posts/how-to-calibrate-extrusion-thickness/)

[https://boaimpressao3d.com.br/2015/03/18/como-configurar-um-novo-filamento-parte-1/](https://boaimpressao3d.com.br/2015/03/18/como-configurar-um-novo-filamento-parte-1/)
