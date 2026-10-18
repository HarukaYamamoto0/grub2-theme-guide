---
title: Como o sistema de temas funciona
description: Entenda como o GRUB2 carrega, interpreta e renderiza temas gráficos, desde a configuração do bootloader até a exibição dos componentes na tela.
sidebar:
  order: 2
---

O sistema de temas do GNU GRUB funciona por meio de um mecanismo próprio de interpretação e renderização de interfaces
gráficas.

Diferentemente de aplicações convencionais, que podem utilizar bibliotecas gráficas fornecidas pelo sistema operacional,
o GRUB precisa apresentar sua interface **antes mesmo de o sistema operacional ser carregado**.

Isso significa que ele não pode depender de tecnologias como X11, Wayland ou bibliotecas gráficas instaladas no Linux.

Em vez disso, o GRUB possui seus próprios mecanismos para acessar arquivos, carregar imagens e fontes, gerenciar
componentes e desenhar a interface na tela.

Para compreender seu funcionamento, precisamos conhecer três elementos fundamentais:

- **Configuração do bootloader:** determina como o GRUB deve funcionar, quais entradas de inicialização estão
  disponíveis e qual tema será utilizado.
- **Arquivo do tema:** descreve os elementos gráficos, suas propriedades e como devem ser organizados.
- **Recursos gráficos:** arquivos de imagem e fontes utilizados para construir a interface visual.

## Como o GRUB encontra o tema?

Em uma instalação convencional, o GRUB utiliza um arquivo chamado `grub.cfg` para determinar seu comportamento durante a
inicialização.

Esse arquivo contém instruções que podem configurar o terminal gráfico, carregar módulos, definir variáveis e criar as
entradas do menu de inicialização.

Embora seja possível modificar diretamente o `grub.cfg`, isso geralmente não é recomendado, pois seu conteúdo costuma
ser gerado automaticamente.

Em muitas distribuições Linux, as configurações principais são definidas em `/etc/default/grub`.

Para selecionar um tema, podemos utilizar a variável `GRUB_THEME`:

```bash
GRUB_THEME="/boot/grub/themes/my-theme/theme.txt"
```

Essa variável informa às ferramentas de geração da configuração onde está localizado o arquivo principal do tema.

Após modificar `/etc/default/grub`, precisamos regenerar o `grub.cfg` utilizando o comando apropriado para nossa
distribuição.

Durante esse processo, o caminho do tema é incorporado à configuração que será utilizada pelo GRUB na próxima
inicialização.

É importante compreender que **o GRUB não lê diretamente o arquivo `/etc/default/grub` durante o boot**. Esse arquivo é
utilizado pelas ferramentas executadas no Linux para produzir a configuração efetivamente interpretada pelo bootloader.

## O que acontece durante a inicialização?

De forma simplificada, o carregamento de um tema acontece na seguinte sequência:

1. O firmware do computador, seja BIOS ou UEFI, inicia o GRUB.
2. O GRUB carrega os componentes necessários e interpreta sua configuração.
3. A configuração prepara o ambiente gráfico e identifica o tema selecionado.
4. O sistema de temas localiza e lê o arquivo `theme.txt`.
5. As propriedades e declarações de componentes são interpretadas.
6. O GRUB carrega os recursos gráficos necessários e constrói a interface.
7. O menu de inicialização é apresentado na tela.

A sequência exata de carregamento pode variar conforme a distribuição, os módulos disponíveis e a configuração
utilizada.

O ponto fundamental é que o tema não é executado como um programa independente. Ele é **interpretado pelo próprio
GRUB**, que utiliza suas definições para construir a interface gráfica.

## Como o arquivo `theme.txt` é interpretado?

O `theme.txt` é um arquivo de texto simples que utiliza uma sintaxe própria.

Seu conteúdo é composto principalmente por dois tipos de declarações: **propriedades globais** e **componentes
gráficos**.

### Propriedades globais

As propriedades globais definem características gerais da interface, como a cor de fundo, a imagem de fundo e o título.

Por exemplo:

```text
desktop-color: "#101018"
title-text: "GNU GRUB"
title-color: "#ffffff"
```

Observe que essas propriedades utilizam dois-pontos (`:`) para separar o nome de seu valor.

Elas não pertencem a um componente individual, mas à configuração geral do tema.

### Componentes gráficos

Os componentes representam elementos específicos da interface, como textos, imagens e menus.

Diferentemente das propriedades globais, eles são declarados utilizando o símbolo `+`, seguido pelo tipo do componente e
por um bloco de propriedades.

Por exemplo:

```text
+ label {
    text = "Hello, GRUB!"
    color = "#ffffff"
    align = "center"

    left = 10%
    top = 10%
    width = 80%
    height = 30
}
```

Nesse exemplo, declaramos um componente do tipo `label`, responsável por exibir uma linha de texto.

As propriedades dentro das chaves determinam seu conteúdo, aparência, posição e dimensões.

Observe também que as propriedades dos componentes utilizam o sinal de igualdade (`=`), diferentemente das propriedades
globais.

Essa distinção é importante, pois os dois tipos de declaração possuem regras sintáticas diferentes.

Ao interpretar o arquivo, o GRUB identifica os componentes e utiliza suas propriedades para construir os elementos
correspondentes da interface.

## Como os componentes são organizados?

O sistema de temas organiza seus componentes em uma **estrutura hierárquica**, semelhante a uma árvore.

No topo dessa hierarquia existe um elemento raiz (*root element*), responsável por conter os demais elementos da
interface.

Esse elemento é um contêiner do tipo `canvas`, que ocupa toda a área disponível na tela.

A partir dele, podemos adicionar componentes diretamente ou utilizar outros contêineres para criar organizações mais
complexas.

Os principais tipos de contêineres são:

- `canvas`: permite posicionar os componentes filhos utilizando coordenadas.
- `vbox`: organiza os componentes verticalmente, de cima para baixo.
- `hbox`: organiza os componentes horizontalmente, da esquerda para a direita.

Os contêineres também podem conter outros contêineres, permitindo construir uma hierarquia de elementos.

Por exemplo, podemos utilizar um contêiner horizontal para organizar um logotipo ao lado de um texto, enquanto outro
contêiner organiza verticalmente diferentes informações.

Essa estrutura determina como os componentes se relacionam e como suas posições e dimensões são calculadas.

## Como os elementos são renderizados?

Após interpretar o arquivo do tema, o GRUB utiliza seu sistema gráfico para desenhar os componentes na tela.

Cada componente possui propriedades que determinam sua aparência e, quando aplicável, sua posição e dimensões.

O resultado depende tanto dessas propriedades quanto do espaço disponível para renderização.

Por exemplo, um componente pode ter sua largura definida em pixels ou como uma porcentagem do espaço de referência
utilizado pelo mecanismo de layout.

Isso permite criar interfaces que se adaptam parcialmente a diferentes resoluções.

Entretanto, o GRUB não possui um sistema de layout responsivo equivalente ao CSS utilizado pelos navegadores.

Por esse motivo, o comportamento de uma interface em uma resolução de `1024x768` pode ser diferente daquele observado em
`1920x1080`.

### Carregamento de imagens e fontes

O GRUB também precisa carregar os recursos gráficos utilizados pelo tema.

Esses recursos podem incluir:

- Imagens de fundo e logotipos.
- Ícones associados às entradas do menu.
- Imagens utilizadas em bordas e decorações.
- Fontes no formato PF2.

Os arquivos precisam estar acessíveis ao GRUB durante a inicialização.

Isso significa que não basta que um arquivo exista no sistema operacional: o bootloader também precisa conseguir acessar
o dispositivo, o sistema de arquivos e o caminho correspondente.

Fontes personalizadas também precisam estar disponíveis e carregadas para poderem ser utilizadas na renderização do
texto.

Nos próximos capítulos, veremos como preparar esses recursos e referenciá-los corretamente.

## Como o menu de inicialização se relaciona com o tema?

O menu de inicialização merece atenção especial porque seu conteúdo não é definido diretamente pelo tema.

As entradas disponíveis são determinadas pela configuração do GRUB, normalmente por meio de declarações `menuentry` e
`submenu` presentes no `grub.cfg`.

O componente `boot_menu` é responsável por apresentar essas entradas visualmente.

Isso cria uma separação entre duas responsabilidades:

**Configuração do GRUB (`grub.cfg`)**

Determina quais entradas existem, seus títulos e quais comandos serão executados quando uma delas for selecionada.

**Configuração do tema (`theme.txt`)**

Determina como essas entradas serão apresentadas, incluindo fontes, cores, ícones, espaçamento e aparência do item
selecionado.

Essa separação permite modificar a aparência do menu sem precisar alterar as instruções responsáveis por inicializar os
sistemas operacionais.

Da mesma forma, novas entradas podem ser adicionadas à configuração do GRUB sem exigir que o tema seja reescrito.

## Quando as alterações são aplicadas?

Uma característica importante do sistema de temas é que o arquivo `theme.txt` é carregado durante a inicialização do
GRUB.

Portanto, após modificar alguma propriedade do tema, normalmente basta reiniciar o computador para visualizar o
resultado.

Não é necessário regenerar o arquivo `grub.cfg` sempre que uma imagem, fonte ou propriedade visual for modificada.

Entretanto, existem situações em que a regeneração é necessária:

| Alteração                                                | Regenerar `grub.cfg`? |
|----------------------------------------------------------|-----------------------|
| Modificar propriedades em `theme.txt`                    | Não                   |
| Substituir a imagem de fundo                             | Não                   |
| Alterar cores e posições dos componentes                 | Não                   |
| Substituir uma fonte já configurada                      | Não                   |
| Modificar `GRUB_THEME` em `/etc/default/grub`            | Sim                   |
| Modificar opções de inicialização em `/etc/default/grub` | Sim                   |

Essas regras pressupõem que os caminhos dos recursos permaneçam válidos e a configuração gerada já carrega
corretamente o tema.

Para facilitar o desenvolvimento, também podemos testar alterações utilizando uma máquina virtual, evitando reiniciar o
computador principal a cada modificação.

## Separação entre configuração e apresentação

Podemos resumir o funcionamento do sistema de temas em três camadas:

**Configuração:** o GRUB identifica quais opções e entradas de inicialização devem estar disponíveis, além de qual tema
utilizar.

**Descrição da interface:** o arquivo `theme.txt` define a aparência e a organização dos componentes gráficos.

**Renderização:** o GRUB interpreta essas definições, carrega os recursos necessários e desenha a interface na tela.

Compreender essa separação facilita tanto a criação de novos temas quanto a identificação de problemas.

Se uma entrada de inicialização não existe, por exemplo, o problema pode estar na configuração do GRUB, e não
necessariamente no tema.

Por outro lado, se uma entrada existe, mas está sendo apresentada com cores ou dimensões incorretas, o problema está
provavelmente relacionado às propriedades visuais.

Nos próximos capítulos, começaremos a explorar a estrutura do `theme.txt` e o funcionamento de seus componentes,
construindo gradualmente nossa própria interface de inicialização.

### Referências

- [GNU GRUB - Theme File Format](https://www.gnu.org/software/grub/manual/grub/html_node/Theme-file-format.html)
- [GNU GRUB - Simple Configuration](https://www.gnu.org/software/grub/manual/grub/html_node/Simple-configuration.html)
- [GNU GRUB - Configuration](https://www.gnu.org/software/grub/manual/grub/html_node/Configuration.html)
- [GNU GRUB - Source Code](https://git.savannah.gnu.org/cgit/grub.git/)
