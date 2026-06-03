const titulo = document.querySelector('#titulo');
const subtitulo = document.querySelector('#subtitulo');
const caixa = document.querySelector('#caixa');

titulo.textContent = 'Java script no DOM!';
subtitulo.textContent = 'Novo subtítulo!';
caixa.innerHTML = 'Nova <strong>caixa!</strong>';

console.log(titulo.textContent);
console.log(subtitulo.textContent);
console.log(caixa.textContent)