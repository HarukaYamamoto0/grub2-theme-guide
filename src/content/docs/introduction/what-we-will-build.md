---
title: O que construiremos neste tutorial
description: Conheça o tema que desenvolveremos ao longo deste guia e os recursos do GRUB2 que utilizaremos para construí-lo.
sidebar:
  order: 3
---

Ao longo deste tutorial, construiremos um **tema completo para o GNU GRUB**, começando com um arquivo de configuração
vazio e adicionando gradualmente os elementos necessários para criar uma interface de inicialização personalizada.

Nosso objetivo não será simplesmente reproduzir a aparência de um tema existente, mas compreender como cada componente
funciona, quais propriedades estão disponíveis e como elas influenciam o resultado visual.

Ao final, teremos um tema funcional que reúne os principais recursos oferecidos pelo sistema de personalização gráfica
do GRUB.

## Conheça o resultado

A imagem abaixo apresenta o tema que construiremos ao longo do tutorial.

![Stardew-Valley GRUB Theme](../../../../src/assets/docs/introduction/what-are-grub-themes/stardew-valley-grub-theme.webp)

> O criador original desse tema é o [@liuu](https://store.kde.org/u/liuu), estou apenas usando ele como exemplo, pois
> esse é meu tema favorito.

Embora o resultado pareça uma única interface, ele será composto por diversos elementos independentes, cada um com suas
próprias propriedades e responsabilidades.

A construção será faseada, permitindo observar como cada alteração no arquivo `theme.txt` afeta a aparência do menu de
inicialização.

## O que vamos implementar?

Durante o desenvolvimento do tema, exploraremos os principais recursos disponíveis no GRUB.

### Plano de fundo e imagens

Começaremos definindo a aparência geral da interface, utilizando cores e imagens para criar o plano de fundo.

Também aprenderemos a adicionar logotipos e outros elementos gráficos, controlando suas posições e dimensões.

### Fontes e textos

Utilizaremos fontes personalizadas para apresentar títulos e informações na tela.

Para isso, aprenderemos a converter arquivos de fontes para o formato PF2, utilizado pelo GRUB, e a configurar
componentes de texto por meio de suas propriedades.

### Menu de inicialização

Construiremos o elemento mais importante da interface: o menu responsável por apresentar as entradas de inicialização
disponíveis.

Personalizaremos sua posição, suas dimensões, as fontes, os ícones e a aparência da entrada selecionada.

### Indicador de tempo

Adicionaremos um indicador visual para representar a contagem regressiva até a inicialização automática da entrada
padrão.

Exploraremos os indicadores horizontais e circulares disponíveis no GRUB e suas possibilidades de personalização.

### Organização e decoração dos componentes

Aprenderemos a utilizar contêineres para organizar os elementos na tela e criar layouts mais elaborados.

Também exploraremos o sistema de decorações gráficas em nove regiões (*nine-slice scaling*), utilizado para construir
bordas, molduras e outros elementos redimensionáveis.

## Como construiremos o tema?

Em vez de apresentar um arquivo `theme.txt` completo e explicar suas propriedades posteriormente, construiremos a
interface **de maneira incremental**.

Cada etapa do tutorial seguirá uma abordagem simples:

1. Apresentaremos o componente ou recurso que será utilizado.
2. Explicaremos suas principais propriedades e seu funcionamento.
3. Adicionaremos o componente ao nosso tema.
4. Testaremos o resultado e analisaremos seu comportamento.
5. Ajustaremos suas propriedades até alcançar o resultado desejado.

Dessa forma, você poderá acompanhar a evolução da interface e compreender o papel de cada elemento no resultado final.

Ao longo do processo, também discutiremos limitações, comportamentos inesperados e particularidades do mecanismo de
renderização do GRUB.

## Testando nosso progresso

Como o GRUB é executado antes do sistema operacional, visualizar as alterações normalmente exige reiniciar o computador.

Entretanto, repetir esse processo a cada pequena modificação seria pouco prático.

Por isso, utilizaremos o **QEMU** para testar nosso tema em um ambiente virtualizado, permitindo experimentar diferentes
configurações sem precisar modificar continuamente o bootloader do sistema principal.

Também poderemos testar diferentes resoluções e observar como o tema se comporta em cada uma delas.

## O que você terá ao final?

Ao concluir o tutorial, você terá um tema funcional, acompanhado de seus arquivos de configuração, imagens e fontes.

Mais importante, terá adquirido conhecimento sobre os mecanismos utilizados pelo GRUB para construir e apresentar
interfaces gráficas.

Isso permitirá que você não apenas modifique o tema desenvolvido aqui, mas também crie seus próprios projetos, explore
diferentes estilos visuais e compreenda melhor o funcionamento de temas existentes.

O tema apresentado neste tutorial é apenas o ponto de partida. **O objetivo é que você compreenda o sistema o suficiente
para não depender de exemplos prontos.**

No próximo capítulo, veremos quais ferramentas e conhecimentos serão necessários para começar.
