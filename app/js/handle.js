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
        `<img id='checkCel' class='findTheRightSquare' data-type='${cellValue}' src='${imgSrc}' alt='covered' 
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

  $(document).on("click", ".carinha", function () {
    location.reload(); // Recarrega a página
  });
});