/* Selecionar elementos do HTML para o JS*/
document.querySelector('.texto2') //selecionando classe

document.querySelector('#texto1')// selecioando Id

/*Trocando o texto */
let paragrafo = document.querySelector('.texto2')
paragrafo.innerText = "Troquei o texto da classe .texto2"

document.querySelector('.texto2').innerText = "Troquei o texto da classe .texto2"


/*Trocar textos com elementos HTML */
document.querySelector('#texto1').innerHTML = "<h2> Troquei o texto e a tag do ID #texto1"


/*Alterando estilos com CSS */
let texto = document.getElementById('texto1')
texto.style.backgroundColor = "blue"

/*Criando um elemento para o JS */
let paragrafo = document.createElement('p') // Cria só o elemento
paragrafo.innerText = "Texto novo aqui"
paragrafo.body.appendChild(paragrafo) //anexando paragrafo dentro do body


/*Trocando elementos no JS */
let img = document.querySelector('img')
ImageBitmap.setAttribute('src', 'linkdaimagem')

/*Eventos DOM JS */
/*
-Eventos mais usados:
onclick, onmouseenter, onmouseout e onchange
Esses eventos colocamos na tag do button
<button onclick="suaFuncao()">Clique aqui</button>
*/



/*AddEventListener - Esse evento é usado diretamente no documento JS

texto.addEventListener('click', sua Funcao)
*/

/*ParentNode - ele informa quem é o pai, do elemento selecionado */
document.querySelector("li").parentNode

