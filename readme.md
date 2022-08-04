
# Javascript

Em algumas funções é utilizado um `if()` para verificar se aquela "classe" existe.

## initTabNav

A função `initTabNav()` cria uma página mais "clean" a seção animais. Ou seja, ao clicar na foto do animal, um texto sobre ele aparece escondendo as informações dos demais. 

A função é baseado no index dos animais. Exemplo: 
"A imagem raposa (`.animais-lista li`) e as informações da raposa (`.animais-descricao section`) estão no `index 0`"
"A imagen do esquilo (`.animais-lista li`) e as informações do esquilo (`.animais-descricao section`) estão no `index 1`"

Usou se um `forEach()` para remover todas as classes `ativo` que existir e em seguida é adicionado a classe `ativo` ao index que eu cliquei. Dessa forma, apenas o texto do animal selecionado será exibido.

Também foi utilizado um `forEach()` para adicionar um evento de `click`.

## initaccordion()

Função interativa com o DOM para esconder o texto das perguntas na seção "FAQ". Utilizou-se um `forEach()` para adicionar um de `click`.

## initScrollSuave

A função cria um scroll suave ao selecionar um item no menu de navegação.

a função `scrollToSection()` cria um link entre o item que estamos clicando e a seção dele.

Utilizou-se também a função `window.scrollTo()` para realiza a rolagem para nas seções de navegação.


# HTML

Basicamente uma estrutura simples contando `section` para separação.

Foi utilizado algumas `class` para definir estilos especificos e `id` para vincular o `nav`.

# CSS

Primeiramente resetou alguns estilos do `html`, pois, por padrão, ele possui alguns espaçamentos.

```css
body,h1,h2,h3,ul,li,p,dd,dt,dl {
margin:0px;
padding: 0px;
}
```

Em seguida, aplico alguns estilos nas imagens. Com `max-width` evitamos que a imagem ultrapasse 100% do tamanho do container.

```css
img{
display: block;
max-width: 100%; 
}
```
O comando `list-style` remove as "bolinhas" das listas.

```css
ul {
list-style: none;
}
```

O `menu` começa na linha 3 e termina na 5. Como temos 4 colunas, temos um total de 5 linhas.
`margins` de 2rem, unidade relativa do pixel da tipografia principal do site (geralmente 1rem = 16px).

```css
.menu{
grid-column: 3/5;
margin-top: 2rem;
margin-bottom: 2rem;
background: #fb5;
}
```

Foi utilizado `display: flex` no `ul` do menu para posicionar os itens um ao lado do outro.

`flex-wrap: wrap;` para que os itens quebrem caso não caibam mais dentro.

```css
.menu ul{
display: flex;
flex-wrap: wrap;
padding: 10px;
}
```

Para estilizar o item do menu usamos `.menu li a`. `text-decoration` para remover o sublinhado.

```css
.menu li a{
display: block;
padding: 10px;
margin-right: 10px;
color: #222;
text-decoration: none;
font-family: monospace;
font-weight: bold;
text-transform: uppercase;
font-size: .875rem;
letter-spacing: .1em;
}
```

Para a class `grid-section` colocamos ela da linha 2 até a 4 e um `width` de 100% para que se expanda 100% do que ela conseguir. `box-sizing: border-box` para acumular o padding. `display: grid` para o conteúdo de dentro também tenha um grid layout. `grid-template-columns: 900px 300x 1fr;` define o tamanho das colunas, ou seja como o grid layout vai ser. Segunda coluna das fotos e terceira coluna dos textos (1fr para aumentar e diminuir conforme o tamanho da tela). `grid-gap: 20px;` para dar uma distancia entre as colunas.

```css
.grid-section {
grid-column: 2/4;
width: 100%;
box-sizing: border-box;
padding: 10px;
display: grid;
grid-template-columns: 90px 300px 1fr;
grid-gap: 20px;
margin-bottom: 4rem;
}
```

O `grid-column` do titulo esta dentro do `grid-section`.

```css
.titulo {
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: 6rem;
line-height: 1;
font-weight: 400;
margin-bottom: 1rem;
grid-column: 1/4;
}
```

`margin-bottom:1rem` para separar o `p` do `h2`

```css
.animais h2{
font-family: monospace;
font-size: 1rem;
text-transform: uppercase;
letter-spacing: .1em;
margin-bottom: 1rem;

}
```

para criar o quadradinho laranja, usou-se o `::before`. Sempre tem que ter o `content`. `display: inline-block;` para ficar na mesma linha. `margin-right: 10px;` para dar uma separada.
```css
.animais h2::before{

}
```

O que estourar o container no eixo y, coloca no scroll

```css
.animais-lista {
height: 370px;
overflow-y: scroll;
grid-column: 2;
}
```

Para o responsivo criou-se um `@media (max-width: 700px) ` ou seja, quando o `max-width` for menor do que 700px, os estilos dentro dele serão aplicados.

```css
@media (max-width: 700px) {
body {
grid-template-columns: 1fr;
}
.menu, .grid-section, .copy {
grid-column: 1;
}
.grid-section {
grid-template-columns: 100px 1fr;
grid-gap: 10px;
}
.animais-lista {
grid-column: 1;
}
.faq-lista, .dados, .mapa {
grid-column: 1 / 3;
}
.grid-section h1 {
font-size: 3rem;
}
.menu {
margin-top: 0px;
}
.copy {
margin-bottom: 0px;
}
}

```

