# Frontend Mentor - Interactive card details form

![Design preview for the Interactive card details form coding challenge](./design/desktop-preview.jpg)

Os desafios do Frontend Mentor ajudam a melhorar suas habilidades como desenvolvedor através da construção de projetos realistas.

## Bem-Vindos! 👋

Obrigado por acessarem este Desafio do Front-end Mentor!

## Conteúdos

- [Geral](#geral)
  - [O desafio](#o-desafio)
  - [Meu processo](#meu-processo)
  - [Construído com](#construido-com)
  - [Continuar evoluindo](#continuar-evoluindo)
- [Autor](#autor)


### O Desafio

O desafio aqui era:
Users should be able to:

- Preencher o formulário e ver os detalhes do cartão se modificando em tempo real
- Receber uma mensagem de erro quando o formulário for preenchida de forma errada, como:
  - Quando um campo está vazio
  - Quando os campos de númer, data e CVC estiverem em formato incorreto
- Utilizar um layout responsivo de acordo com a tela do dispositivo.
- Utilizar o hover para os elementos que houver interações na página

## Meu processo

Comecei basicamente pelo HTML, localizei nas imagens do design as divs e as seções e separei entre direita e esquerda. Observei que haveriam campos de um formulário e um botão e coloquei tudo no HTML.

Parti para o CSS, primeiramente exportei a fonte do google.fontes para o projeto. Em seguida criei variavéis para cores e estilização dos botões e inputs.
Era uma estilização complexa, tive que utilizar bastante das posições dos elementos para ajustar os dois cartões e os campos do formulário. Utilizei flex, position: absolute, inline, inline-block e afins.
Utilizei hover e focus nas partes de interação, como no botão por exemplo. Por fim, escondi as mensagens de erro também dentro do CSS. 

No JavaScript precisei criar diversas constantes, selecionando todos os elementos, por classe, id e etc. Depois criei constantes com eventos para que os erros fossem aparecendo caso fossem digitados errados, além disso criei validações para certificar de que os elementos fossem aceitos apenas se digitados corretamente através de if e else.   
Outros detalhes como separar os números do cartão de 4 em 4, colocar número máximo de 18 caracteres, colocar apenas números no campo de números do cartão, etc. Tudo isso feito com eventos do JavaScript.


### Construído com

- HTML5
- CSS
- Flexbox
- Mobile-first

### Continuar evoluindo

Preciso focar em melhorar meu JavaScript e partir para projetos mais ambiciosos, talvez formulários maiores, que manipulam o DOM e arrays e até projetos que consumam API

## Autor

- Rafael Santos Corrêa - [Rafael Corrêa](https://github.com/Faelsc)
- Linkedin - [Rafal Corrêa](https://www.linkedin.com/in/correarafaelsantos/)


