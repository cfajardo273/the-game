const cells = Array.from(document.querySelectorAll('.grid > div'));

const playerXScoreElement = document.getElementById('player-x-score');
const playerOScoreElement = document.getElementById('player-o-score');

const winnerDisplay = document.querySelector('.grid');
const winnerDisplayP = document.querySelector('.grid > aside > p');
const winnerDisplayCloseButton = document.querySelector(
  '.grid > aside > button',
);

const solutions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board = [null, null, null, null, null, null, null, null, null];

let playerTurn = 'x';

const changePlayerToPlay = () => {
  if (playerTurn === 'x') {
    playerTurn = 'o';
  } else {
    playerTurn = 'x';
  }
};

// Players

let playerXScore = 0;
let playerOScore = 0;

// 3.6.1
const checkIfPlayerWin = (player) => {
  // Recibo el jugador de turno y retorno en forma de booleano (true|false) el resultado de comparar si:
  return solutions.some((solution) => {
    return solution.every((positionValue) => {
      // 3.6.1.1
      // el jugador (X o O) esta presente en todas las posiciones descritas en la solucion dentro del array board
      // retorna verdadero, sino falso
      return player === board[positionValue];
    });
  });
};

// 4.1
const addScore = (player) => {
  // Evalua el jugador de turno ganador y añade mas uno al score anterior
  if (player === 'x') {
    playerXScore = playerXScore + 1;
  } else {
    playerOScore = playerOScore + 1;
  }

  // Imprime en pantalla el score nuevo cuando hay ganador
  playerXScoreElement.innerText = playerXScore;
  playerOScoreElement.innerText = playerOScore;
};

const showWinner = (player) => {
  winnerDisplay.classList.add('winner');
  winnerDisplayP.innerText = player;
};

// 3. a cada cell que es cliqueada se corre lo siguiente

const handleClick = (event) => {
  // 3.1 salvo en una constante de ambito local (scope) el valor del elemento HTML cliqueado
  const cellClicked = event.target;
  // 3.2 Inyecto como texto el jugador que le toca jugar
  cellClicked.innerText = playerTurn;
  // 3.3 Remuevo el event listener para evitar que un cell cambie de valor una vez clicado
  cellClicked.removeEventListener('click', handleClick);
  // 3.4 Identifico que posición dentro del tablero fue clickeada
  const positionPlayed = cells.indexOf(cellClicked);
  // 3.5 Agrego en en el array tablero (board) en la posición identificada en el el paso 3.4
  // el valor del jugador de turno (player)
  board[positionPlayed] = playerTurn;

  // 3.6 Por cada click contrastar el array board (que tiene las posiciones jugadas por cada judador)
  // versus el array de arrayes de soluciones (solutions), si un jugador (X o O) es igual en las las posiciones
  // identificadas en uno de los arrayes de solucion declaro ganador

  const ifPlayerWin = checkIfPlayerWin(playerTurn);
  // Mostrar ganador en pantalla
  if (ifPlayerWin) {
    // 4. Suma + 1 al jugador ganador
    addScore(playerTurn);
    // Mostrar score de los jugadores
    showWinner(playerTurn);
  }
  // 3.7 Cambio de jugador
  changePlayerToPlay();
};

// 2. por cada elemento dentro de section (lo llamamos cell) agrego un EventListener de Click
// para que cada vez que haya click en ese cell se llame a la funcion handleClick
const addHandleClick = (cell) => {
  cell.addEventListener('click', handleClick);
};

// 1. iterando por cada uno de los div que estan dentro de section en HTML (linea 13 de HTML)
// y por cada uno corriendo la función addHandleClick
cells.forEach(addHandleClick);

// Limpiar el tablero con el boton de reset

const reset = document.querySelector('button[type="reset"]');

reset.addEventListener('click', playNewGame);

function playNewGame() {
  /* console.log('hola'); */
  /* document.querySelector('.boardtic').classList.remove('.boardtic'); */
  cells.forEach((cell) => (cell.innerText = ''));
  board = [null, null, null, null, null, null, null, null, null];
  playerTurn = 'x';
  cells.forEach(addHandleClick);
}

// ***************************** /
// cerrar pantalla ganadora
// ***************************** /

winnerDisplayCloseButton.addEventListener('click', closeWinnerDisplay);

// Ejecucion

function closeWinnerDisplay(event) {
  winnerDisplay.classList.remove('winner');
  playNewGame();
}

// TODO:
// Cuando hay ganador se muestra la pantalla de ganador sobre el tablero
// La pantalla de ganador tiene un botón de close, que cuando lo presiono debe:
// 1 Llamar la function playNewGame()
// 2 Remover la clase winner del elemento boardtic
