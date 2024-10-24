// $(document).ready(() => {
//   var createBlocos = `<img id='squareFind' class='findTheRightSquare' src='${imgSrc}' alt='xs'>`;
//   for (let i = 1; i <= 81; i++) {
//     $("#euamojessica").append(createBlocos);
//   }
// });

//$(document).ready(function () {

//  let rows = 9 // total de linhas
//  let cols = 9 // total de colunas
//  let bombsTotal = 10 // total de bombas
// essa linha n sei porra nenhuma AINDA
//  let board = Array.from({ length: rows}, () => Array (cols).fill(0))
//imagem default para aparecer !
//  let defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEW9vb3///97e3uVBMaVAAAAHklEQVQI12MIDQ0NARFBDAEMDFzkEl6rVq1i0AISAIlSC03msuDYAAAAAElFTkSuQmCC'

// function para criar bombas
//  function placeBombs() {
//    let placeBombs = 0;
//   while(placeBombs < bombsTotal){
//      let row = Math.floor(Math.random() * rows)
//      let col = Math.floor(Math.random() * cols)
//      if (board[row][col] !== 'B'){
//        board[row][col] = 'B'
//        placeBombs++
//        updateSurroundingSquares(row, col)
//      }
//    }
//  }

// function para contar bombas
//  function updateSurroundingSquares(bombRow, bombCol) {
//    for (let r = bombRow - 1; r <= bombRow + 1; r++) {
//      for (let c = bombCol - 1; c <= bombCol + 1; c++) {
//        if (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] !== 'B') {
//          board[r][c]++;
//        }
//      }
//    }
//  }

// Coloca as bombas no tabuleiro
//  placeBombs();

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++){
//    let imgSrc = defaultImage
// criar os quadrados
//      $("#euamojessica").append(`<img id='squareFind' class='findTheRightSquare' src='${imgSrc}' alt='quadrados'>`);
//    }
//  }

//  $(".findTheRightSquare").click( function() {

//    var index = $(".findTheRightSquare").index(this) //obter o indice do quadrado
//    var row = Math.floor(index / cols)
//    var col = index % cols

// definir imagem dependendo do valor da CELULA
//    let cellValue = board[row][col]
//    let imgSrc

//   if(cellValue === 'B'){

//      imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX/AAAAAAB7e3v///9Ql2ugAAAANElEQVQI12NYBQQMDQxA0MDgACNcQxwYGkRDgaz4UAcI0RoaGsLQEApkAQmwLEQdQhvYFAAmDxJuxV7pRgAAAABJRU5ErkJggg=='

//  } else if (cellValue > 0){

//  imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEW9vb0AAP97e3u7pKrVAAAAJUlEQVQI12NYBQQMDQxAACUCgAQjiGAFEaIQLiYhGgojEHqBGAB4Gw2cMF3q+AAAAABJRU5ErkJggg=='

//    } else {

//      imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEW9vb17e3tXxGy+AAAAEElEQVQI12P4/5+hgYF4BAAJYgl/JfpRmAAAAABJRU5ErkJggg=='

//    }
//    $(this).attr('src', imgSrc);
//  })

//});

// $(document).ready(() => {
//     const rows = 9;
//     const cols = 9;
//     const totalSquares = rows * cols;
//     const totalBombs = 10; // Número de bombas
//     const board = Array.from({ length: rows }, () => Array(cols).fill(0));

//     // Função para colocar bombas
//     function placeBombs() {
//       let placedBombs = 0;
//       while (placedBombs < totalBombs) {
//         const row = Math.floor(Math.random() * rows);
//         const col = Math.floor(Math.random() * cols);
//         if (board[row][col] !== 'B') { // Verifica se não há bomba
//           board[row][col] = 'B';
//           placedBombs++;
//           updateSurroundingSquares(row, col);
//         }
//       }
//     }

//     // Função para atualizar contagem de bombas nas células adjacentes
//     function updateSurroundingSquares(bombRow, bombCol) {
//       for (let r = bombRow - 1; r <= bombRow + 1; r++) {
//         for (let c = bombCol - 1; c <= bombCol + 1; c++) {
//           if (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] !== 'B') {
//             board[r][c]++;
//           }
//         }
//       }
//     }

//     // Coloca as bombas no tabuleiro
//     placeBombs();

//     // Cria o tabuleiro visual
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         let cellValue = board[i][j];
//         let imgSrc;

//         // Define a imagem a ser exibida dependendo do valor da célula
//         if (cellValue === 'B') {
//           imgSrc = 'path/to/bomb/image.png'; // Altere para o caminho da sua imagem de bomba
//         } else if (cellValue > 0) {
//           imgSrc = `path/to/numbers/${cellValue}.png`; // Altere para o caminho das suas imagens de números
//         } else {
//           imgSrc = 'path/to/empty/image.png'; // Altere para o caminho da sua imagem de célula vazia
//         }

//         // Adiciona a célula ao tabuleiro
//         $("#euamojessica").append(`<img class='findTheRightSquare' src='${imgSrc}' alt='${cellValue}'>`);
//       }
//     }
//   });

$(document).ready(() => {
  const rows = 9;
  const cols = 9;
  const totalBombs = 10; // Número de bombas
  const board = Array.from({ length: rows }, () => Array(cols).fill(0));
  let gameOver = false; // Variável para controlar o estado do jogo

  // Função para colocar bombas
  function placeBombs() {
    let placedBombs = 0;
    while (placedBombs < totalBombs) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (board[row][col] !== "B") {
        // Verifica se não há bomba
        board[row][col] = "B";
        placedBombs++;
        updateSurroundingSquares(row, col);
      }
    }
  }

  // Função para atualizar contagem de bombas nas células adjacentes
  function updateSurroundingSquares(bombRow, bombCol) {
    for (let r = bombRow - 1; r <= bombRow + 1; r++) {
      for (let c = bombCol - 1; c <= bombCol + 1; c++) {
        if (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] !== "B") {
          board[r][c]++;
        }
      }
    }
  }

  // Função para revelar todas as bombas
  function revealAllBombs() {
    $(".findTheRightSquare").each(function () {
      const cellType = $(this).data("type");
      if (cellType === "B") {
        $(this).attr("src", "../app/bomba.png"); // Revela a imagem da bomba
      }
    });
  }

  // Coloca as bombas no tabuleiro
  placeBombs();

  // Cria o tabuleiro visual
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cellValue = board[i][j];
      let imgSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEW9vb3///97e3uVBMaVAAAAHklEQVQI12MIDQ0NARFBDAEMDFzkEl6rVq1i0AISAIlSC03msuDYAAAAAElFTkSuQmCC"; // Caminho da imagem coberta inicial

      // Adiciona a célula ao tabuleiro com dados sobre o valor
      $("#euamojessica").append(
        `<img class='findTheRightSquare' data-type='${cellValue}' src='${imgSrc}' alt='covered' 
        data-revealed='false'>`
      );
    }
  }

  // Função de clique para revelar a célula
  $(document).on("click", ".findTheRightSquare", function () {
    if (gameOver) return; // Se o jogo acabou, ignora cliques

    const cellType = $(this).data("type");
    const revealed = $(this).data("revealed");

    // Revela a célula apenas se ainda não estiver revelada
    if (!revealed) {
      if (cellType === "B") {
        $(this).attr("src", "../app/bomba.png"); // Caminho da imagem de bomba revelada
        gameOver = true; // Marca o jogo como encerrado
        revealAllBombs(); // Revela todas as bombas
      } else if (cellType > 0) {
        $(this).attr("src", `../app/${cellType}.png`); // Revela a imagem do número correto
      } else {
        $(this).attr("src", "../app/nada.png"); // Revela a célula vazia
      }
      $(this).data("revealed", true); // Atualiza o estado para "revelado"
    }
  });
});
