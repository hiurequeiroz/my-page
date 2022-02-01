---
layout: "post"
titulo: Calibrando a temperatura do filamento
date: 2019-01-27 19:32
categories: impressora3d
imagem: images/filamento3d.jpeg
descricao: Dicas preciosas de como calibrar a temperatura do filamento em uma impressora 3d FDM
ativo: sim
---

Para cada marca, cada cor, e cada tipo de filamento pode diferenciar muito a temperatura ideal de impressão. Para achar a temperatura ideal de impressão, como diria chapolin colorado, siga me os bons.


## 1.1. Calibrando temperatura do filamento

Para calibrar o filamento você imprimir uma dessas peças especificas para [calibrar temperatura](https://www.thingiverse.com/thing:915435/files), eu gosto muito [dessa](https://www.thingiverse.com/thing:1807517), ela tem bastante detalhe por temperatura, isso é importante quando você quer fazer uma calibragem muito especifica para algum tipo de peça.

Depois de baixar sua peça e fatiar no seu fatiador predileto, é hora de editar o gcode (alguns programas fazem isso ser mais fácil). Mas de maneira geral se for manualmente ou se por algum script que algum abençoado disponibilizar por ai (que funcine!), a ideia é mudar a temperatura de impressão para um conjunto especifico de camadas (uns a cada 10mm) depende da peça de calibrgem que escolheu.

De maneira mais universal, você vai fatiar a sua peça com a temperatura minima que pretende começar o teste, depois você editar o gcode em um editor textos (eu uso o próprio repetier)  e verificar no vizualizador de impressão (com a opção "mostrar alcance da camada") e ir variando até identificar onde começa e acaba cada secção de temperatura marcada na peça, veja o exemplo:

<v-img src="images/alcancecamada.png" alt="camadas"></v-img>

<v-img src="images/identicargcode.png" alt="gcode"></v-img>

Ao identificar a camada adicine a linha que vai modificar a temperatura `M104 S200 ;` no caso o `M104` é a opção e o `S200` é parametro, no caso o comando vai mudar a temperatura para 200°C

Ai é só ir mudando o alcance da camada na visualização, identificando a camada, procurando no gcode a camada e adicionando a nova temperatura

Você pode repetir todo o processo só que para a velocidade do cooler (fan) que resfria o extrusor.

### Referências

[https://www.3dhubs.com/talk/t/howto-calibrate-tune-and-fine-tune-your-printer-and-filament/5695]([https://www.3dhubs.com/talk/t/howto-calibrate-tune-and-fine-tune-your-printer-and-filament/5695)

[https://www.youtube.com/watch?v=EATU7grYZ8E](https://www.youtube.com/watch?v=EATU7grYZ8E)