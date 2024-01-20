import "./sass/main.scss";
import { Player, deFlatten, flatten } from "./class";

/**
 * seting up
 */

const player1 = new Player();
const player2 = new Player();

player1.addEnemy(player2);
player2.addEnemy(player1);

function isNegative(num) {
  const val = Math.abs(num) + num;
  return val === 0;
}

const sizes1 = [4, 3, -3, -2, -2, 2, 1, 1, 1, 1];
const location1 = [
  [9, 0],
  [6, 4],
  [4, 7],
  [4, 0],
  [6, 6],
  [2, 1],
  [0, 2],
  [0, 9],
  [2, 5],
  [8, 2],
];
const sizes2 = [4, -3, 3, 2, 2, -2, 1, 1, 1, 1];
const location2 = [
  [3, 6],
  [2, 2],
  [2, 8],
  [1, 0],
  [5, 1],
  [5, 4],
  [7, 5],
  [7, 7],
  [4, 8],
  [8, 1],
];

for (let i in sizes1) {
  // console.log(i);
  player1.Gameboard.place(
    Math.abs(sizes1[i]),
    location1[i],
    !isNegative(sizes1[i]),
  );
  player2.Gameboard.place(
    Math.abs(sizes2[i]),
    location2[i],
    !isNegative(sizes2[i]),
  );
}

/*
 * Done with setup
 */

const board1 = document.querySelector(".board-1");
const board2 = document.querySelector(".board-2");

function createBoards() {
  for (let i = 0; i < 100; i++) {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    div1.setAttribute("id", `0-${i}`);
    div2.setAttribute("id", `1-${i}`);
    div1.setAttribute("data-cellId", i);
    div2.setAttribute("data-cellId", i);
    div2.addEventListener("click", () => {
      if (player2.Gameboard.allSunk() || player1.Gameboard.allSunk()) {
        // document.querySelector(".board-2").classList.add("disable");
        return;
      }
      player1.attack(deFlatten(i));
      handlePlay(i, player2.Gameboard);
      const play = player2.randomPlay();
      if (play) {
        handlePlay(flatten(play), player1.Gameboard, (i = 0));
      }
      if (player1.Gameboard.allSunk() || player2.Gameboard.allSunk()) {
        document.querySelector(".board-2").classList.add("disable");
        const winner = document.querySelector(".winner");
        winner.innerText = player1.Gameboard.allSunk()
          ? "Player 1 won"
          : "Player 2 won";
      }
      // console.log(player2.randomPlay());
    });
    div1.classList.add("boardCell");
    div1.classList.add("board1-cell");
    div2.classList.add("boardCell");
    div2.classList.add("board2-cell");
    board1.appendChild(div1);
    board2.appendChild(div2);
  }
}

createBoards();

function colorShip(player, id = 0) {
  player.Gameboard.ships.forEach((ship) => {
    ship.places.forEach((place) => {
      const elId = `${id}-${place}`;
      const cell = document.getElementById(elId);
      cell.classList.add("ship-cell");
      // console.log(cell);
    });
  });
}
colorShip(player1);
colorShip(player2, 1);
function handlePlay(flatVal, Gameboard, boardId = 1) {
  const el = document.getElementById(`${boardId}-${flatVal}`);
  if (Gameboard.missedMoves.includes(flatVal)) {
    el.innerHTML = "&#8231;";
    // el.innerHTML = "&#176;";
    return;
  }

  Gameboard.ships.forEach((ship) => {
    if (ship.places.includes(flatVal)) {
      // el.innerHTML = "&#10005;";
      el.innerHTML = "&#10036;";
    }
  });
}
// console.log(player1.Gameboard.ships);
