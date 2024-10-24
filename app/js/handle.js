// $(document).ready(() => {
//   var createBlocos = "<img id='squareFind' class='findTheRightSquare' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEW9vb3///97e3uVBMaVAAAAHklEQVQI12MIDQ0NARFBDAEMDFzkEl6rVq1i0AISAIlSC03msuDYAAAAAElFTkSuQmCC' alt='xs'>";
//   for (let i = 1; i <= 81; i++) {
//     $("#euamojessica").append(createBlocos);
//   }
// });
$(document).ready(() => {
    const rows = 9;
    const cols = 9;
    const totalSquares = rows * cols;
    const totalBombs = 10; // Número de bombas
    const board = Array.from({ length: rows }, () => Array(cols).fill(0));
  
    // Função para colocar bombas
    function placeBombs() {
      let placedBombs = 0;
      while (placedBombs < totalBombs) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        if (board[row][col] !== 'B') { // Verifica se não há bomba
          board[row][col] = 'B';
          placedBombs++;
          updateSurroundingSquares(row, col);
        }
      }
    }
  
    // Função para atualizar contagem de bombas nas células adjacentes
    function updateSurroundingSquares(bombRow, bombCol) {
      for (let r = bombRow - 1; r <= bombRow + 1; r++) {
        for (let c = bombCol - 1; c <= bombCol + 1; c++) {
          if (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] !== 'B') {
            board[r][c]++;
          }
        }
      }
    }
  
    // Coloca as bombas no tabuleiro
    placeBombs();
  
    // Cria o tabuleiro visual
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let cellValue = board[i][j];
        let imgSrc;
  
        // Define a imagem a ser exibida dependendo do valor da célula
        if (cellValue === 'B') {
          imgSrc = 'path/to/bomb/image.png'; // Altere para o caminho da sua imagem de bomba
        } else if (cellValue > 0) {
          imgSrc = `path/to/numbers/${cellValue}.png`; // Altere para o caminho das suas imagens de números
        } else {
          imgSrc = 'path/to/empty/image.png'; // Altere para o caminho da sua imagem de célula vazia
        }
  
        // Adiciona a célula ao tabuleiro
        $("#euamojessica").append(`<img class='findTheRightSquare' src='${imgSrc}' alt='${cellValue}'>`);
      }
    }
  });
  