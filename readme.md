# The Game

Un antiguo juego de la época greco-romana, que actualmente se mantiene con diversos nombres por paises y regiones: el gato, Tic Tac, Toe, tres en línea, tres es raya, etc
 
  ## What is it?

 Aunque existen múltitud de versiones y dificultades, esencialmente es un juego de estrategia para todas las edades, que       consiste en que dos jugadores X, O, alineen los tres elemento iguales en una fila, columna o diagonal, antes que el adversario
 
  ## How to install?

 Iteramos todas las celdas del tablero, que previamente habiamos declarado que tenemos en HTML
 En cada una de ellas corrimos una función (addHandleClick) para poder oirlas, que hiciese click cada vez que se tocaba una determinada.
 Declaramos las diversas constantes, con todas las opciones ganadoras posibles, con el detalle de todas las casillas del tablero, con la condición de qué siempre se inicia el juego el jugador X
 Corremos un evento, donde realizamos las diversas constantes para que dentro del tablero que identificamos del HTML, inyectemos texto para el jugador que le toca jugar, e indentificarlos dentro del tablero, la celda que ha cliqueado, removemos el elemento Listener para que una vez ocupada la celda, no pueda volver a ser cliqueada
 Realizamos la constante para que se realice un cambio de posicion del jugador después del cliqueo del contricante, dándole el valor del jugador de turno.  Por cada click compara el array de las posiciones jugadas por cada jugador en el tablero con las arrays de todas las soluciones posible, y cuando localiza una opcion ganador, nos devuelve si es verdadero, sino falso.
 Declaramos una función para evaluar que al jugador del turno ganador se le añada un punto en su score, y que lo imprima
 Como necesitamos limpiar el tablero, realizamos declaramos dos funciones diferentes, un boton de otra partida, que escuche cuando se produce una situacion ganadoras por parte de cualquiera de los jugadores, y otro boton para una vez revisadas todas las celdas de tablero, tanto si se declara un ganador, como si se cliquean el total de las casillas, a traves de formular el boton de reset. 

   ### Technologies

   Se han utilizado arrays del DOM (querySelectory getElementsById), arrays de flechas, la variales const y let, se ha utilizado propiedades (innerText), métodos (indexOf).

  ## How to run

  Nos encontramos con una interfaz sencilla donde aparece la cuadricula del juego con un boton de otra jugada, y el score con los jugadores X y O. Empezamos el juego introduciendose primero la X, y consecutivamente la O. Si uno de los jugadores gana se abre una ventana emergente informando del ganador, y con un botón correspondiente botón de cierre de la ventana. Si se produce el empate, cliqueamos el boton de volver a jugar. 

  ## Documentation
 
 [requerements](./doc/readme.md)

