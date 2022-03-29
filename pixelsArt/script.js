const cor01 = document.getElementById('color1');
const cor02 = document.getElementById('color2');
const cor03 = document.getElementById('color3');
const cor04 = document.getElementById('color4');
const clear = document.getElementById('clear-board');
let tds = document.getElementsByTagName('td');
let corOrigem = 'rgb(0, 0, 0)';

// Marca com selected com a cor selecionada
function selecionaCor(e, cor) {
  // funcao 'replace' conforme site https://www.delftstack.com/pt/howto/javascript/javascript-change-css-class/
  cor01.classList.replace('selected', 'color');
  cor02.classList.replace('selected', 'color');
  cor03.classList.replace('selected', 'color');
  cor04.classList.replace('selected', 'color');
  e.className = 'color selected';
  corOrigem = cor;
}
// monitora a tabela e pinta a celula quando clicado
for (let i = 0; i < tds.length; i += 1) {
  tds[i].addEventListener('click', function (e) {
    // 'this' no site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
    this.style.backgroundColor = corOrigem;
  });
}
// pinta todas as pexil de branco
clear.addEventListener('click', function (e) {
  for (let i = 0; i < tds.length; i += 1) {
    tds[i].style.backgroundColor = 'white';
  }
});
// recebe o tamanho do board e inicia a função que gera a tabela.
let boardSize = '';
const gBoard = document.querySelector("#generate-board");
gBoard.onclick = function () {
  boardSize = document.querySelector("#board-size");
  // verifica tamanho do quadro de pixels se esta entre 5 e 50
  if (boardSize.value < 5) {
    // mostre um alert caso menor que 5
    alert('Board inválido!');
    genera_tabela(5);
  } else if (boardSize.value > 50) {
    // mostre um alert caso maior que 50
    alert('Board inválido!');
    genera_tabela(50);
  } else {
    genera_tabela(boardSize.value);
  }

}

//gera tabela
function genera_tabela(numero) {
  let N = numero;
  console.log(N);
  // Obtendo a referência do elemento body
  var body = document.getElementsByTagName("body")[0];
  // Obtendo a referência do elemento main
  var main = document.getElementsByTagName("main")[0];

  // Crie um elemento <table> e um elemento <tbody>
  var tabela = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // CRIE as células
  for (var i = 0; i < N; i++) {
    // Criar as linhas da tabela
    var fila = document.createElement("tr");

    for (var j = 0; j < N; j++) {
      // Crie um elemento <td> e um nó de texto, faça do nó de texto o conteúdo do <td>, coloque o elemento <td> no final da linha da tabela
      var celula = document.createElement("td");
      // var textoCelda = document.createTextNode(i + " " + j);
      // celula.appendChild(textoCelda);
      fila.appendChild(celula);
      celula.setAttribute("class", "pixel");
    }

    // adicione a linha ao final da tabela (no final do elemento tblbody)
    tblBody.appendChild(fila);
  }

  // posicione o <tbody> abaixo do elemento <table>
  tabela.appendChild(tblBody);
  // acrescenta <table> em <main>
  main.appendChild(tabela);
  // acrescenta <main> em <body>
  body.appendChild(main);
  // modifica o atributo "border" da tabela e o define como "2";
  // tabela.setAttribute("border", "2");
  tabela.setAttribute("id", 'pixel-board');
}

// espera o click para selecionar a cor
cor01.addEventListener('click', function (e) {
  selecionaCor(cor01, 'rgb(0, 0, 0)');
});
cor02.addEventListener('click', function (e) {
  selecionaCor(cor02, 'rgb(255, 0, 0)');
});

cor03.addEventListener('click', function (e) {
  selecionaCor(cor03, 'rgb(0,0,255)');
});

cor04.addEventListener('click', function (e) {
  selecionaCor(cor04, 'rgb(0,255,0)');
});