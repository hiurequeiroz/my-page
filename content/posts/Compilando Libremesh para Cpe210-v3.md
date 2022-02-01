---
layout: post
titulo:  "Compilando Libremesh para Cpe210-v3"
date:   2019-01-23 22:31
author: Hiure
categories: redescomunitarias
imagem: images/terminal.png
descricao: Como compilar um firmware para um roteador não suportado oficialmente pelo OpenWrt
ativo: sim
---


o Cpe210-v3 não tem suporte dos desenvolvedores oficiais do OpenWrt/Lede. E no Libremesh todas as maneiras de compilar documentadas são para modelos suportados para o OpenWrt/Lede. Esse documento tem o objetivo de documentar a jornada de descobrir como compilar um firmware para um modelo não suportado pelo OpenWrt/Lede.


Como meu conhecimento é muito pouco ou quase nenhum esse rascunho vai começar nos passos mais elementares nessa jornada, assim é preciso entender tudo desde o mais básico na arte de compilar openwrt, alguns links: 

1. https://openwrt.org/docs/guide-developer/start

2. https://openwrt.org/docs/guide-developer/quickstart-build-images

3. https://openwrt.org/docs/guide-user/additional-software/beginners-build-guide

4. https://openwrt.org/docs/guide-developer/build-system/install-buildsystem

5. https://openwrt.org/docs/guide-user/additional-software/imagebuilder

6. https://openwrt.org/docs/guide-developer/build-system/use-buildsystem

7. https://openwrt.org/docs/guide-developer/build-system/use-patches-with-buildsystem

8. https://wiki.openwrt.org/doc/howto/build

9. https://github.com/openwrt/openwrt	


Lendo tudo isso, tem algumas coisas importantes a se concluir para prosseguir:

1. Não é possível fazer isso pelo ImageBuilder pois ele só vai funcionar para imagens pré-compiladas

2. Todas as dependências devem estar [[https://openwrt.org/docs/guide-developer/build-system/install-buildsystem#table_of_known_prerequisites|rigorosamente satisfeitas]]. 

Depois de tudo isso comecei fazendo um clone do repositório do openwrt já com as alterações para o cpe210-v3

{% highlight sh %}
git clone -b CPE210-v3-PR --single-branch https://github.com/robimarko/openwrt.git
{% endhighlight %}


Feito isso acresentei os seguintes repositórios para o feed.conf

{% highlight sh %}
cp feeds.conf.default feeds.conf.default.local
cp feeds.conf.default feeds.conf
echo "src-git libremesh https://github.com/libremesh/lime-packages.git" >> feeds.conf
echo "src-git libremap https://github.com/libremap/libremap-agent-openwrt.git" >> feeds.conf
echo "src-git limeui https://github.com/libremesh/lime-packages-ui.git" >> feeds.conf
{% endhighlight %}

Para atualizar os pacotes fiz:

{% highlight sh %}
scripts/feeds update -a
scripts/feeds install -a
{% endhighlight %}



E então para adicionar manualmente os pacotes executei:

{% highlight sh %}
make menuconfig
{% endhighlight %}




Aqui foi possivel encontrar em target o cpe210-v3. Segui a sugestão do git do libremesh () que sugere destacar o pacote dnsmasq em Base system e selecionar dnsmasq-dhcpv6 na mesma seção. Selecionei também o pacote lime-full na seção [[LiMe]] > collections.


![](/assets/images/menuconfig.jpg)

Depois de salvar, é importante dar o comando 

{% highlight sh %}
make download
{% endhighlight %}

Isso vai fazer com que você baixe todos as fontes antes de compilar, isso é importante caso você use mútlipos cores para compilar. Se não fizer isso provávelmente sua compilação falhe.

E então rodei:
{% highlight sh %}
make -j1 V=s
{% endhighlight %}


E compulou-se uma imagem para testar.


Dicas:
Caso você encontre erro na compilação uma sacada é usar a seguinte linha decomando para encontrar o erro:

{% highlight sh %}
make V=s 2>&1 | tee build.log | grep -i '[^_-"a-z]error[^_-.a-z]' 
{% endhighlight %}

