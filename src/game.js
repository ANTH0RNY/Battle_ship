import "./sass/main.scss";
import { Gameboard, Player, deFlatten, flatten } from "./class";

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

// const sizes1 = [4, 3, -3, -2, -2, 2, 1, 1, 1, 1];
const sizes1 = [];
const location1 = [];
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

function buildGameboard() {
  for (let i in sizes2) {
    // console.log(i);
    // player1.Gameboard.place(
    //   Math.abs(sizes1[i]),
    //   location1[i],
    //   !isNegative(sizes1[i]),
    // );
    player2.Gameboard.place(
      Math.abs(sizes2[i]),
      location2[i],
      !isNegative(sizes2[i])
    );
  }
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
    div1.addEventListener("drop", drop);
    div1.addEventListener("dragover", allowDrop);
    div2.addEventListener("click", () => {
      if (player2.Gameboard.allSunk() || player1.Gameboard.allSunk()) {
        return;
      }
      const len = player1.enemy.Gameboard.missedMoves.length;
      player1.attack(deFlatten(i));
      
      handlePlay(i, player2.Gameboard);
      
      if (player1.enemy.Gameboard.missedMoves.length - len === 0) {
        if (player1.Gameboard.allSunk() || player2.Gameboard.allSunk()) {
          document.querySelector(".board-2").classList.add("disable");
          const winner = document.querySelector(".winner");
          winner.innerText = player1.Gameboard.allSunk()
            ? "Player two won"
            : "Player one won";
        }
        return};
      const len1 = player2.enemy.Gameboard.missedMoves.length;
      do {
        const play = player2.randomPlay();
        if (play) {
          handlePlay(flatten(play), player1.Gameboard, (i = 0));
        }
      } while (len1 - player2.enemy.Gameboard.missedMoves.length == 0);
      // console.log(player2.Gameboard)
      if (player1.Gameboard.allSunk() || player2.Gameboard.allSunk()) {
        document.querySelector(".board-2").classList.add("disable");
        const winner = document.querySelector(".winner");
        winner.innerText = player1.Gameboard.allSunk()
          ? "Player two won"
          : "Player one won";
      }
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
    // let isVertical = false;
    ship.places.forEach((place, index) => {
      const elId = `${id}-${place}`;
      const cell = document.getElementById(elId);
      cell.classList.add("ship-cell");
      // console.log(cell);
    });
  });
}
// colorShip(player1);
// colorShip(player2, 1);
function handlePlay(flatVal, Gameboard, boardId = 1) {
  const el = document.getElementById(`${boardId}-${flatVal}`);
  if (Gameboard.missedMoves.includes(flatVal)) {
    // el.innerHTML = "&#8231;";
    el.innerHTML = "&#8226;";
    el.classList.add("miss");
    // el.innerHTML = "&#176;";
    return;
  }

  Gameboard.ships.forEach((ship) => {
    if (ship.places.includes(flatVal)) {
      // el.innerHTML = "&#10005;";
      el.innerHTML = "&#10036;";
      el.classList.add("valid-hit");
    }
  });
}

let currentLength = 0

function allowDrop(event) {
  event.preventDefault();

  document.querySelectorAll(".board1-cell").forEach((node) => {
    node.classList.remove('highlight')
  })
  const point = deFlatten(event.target.id.split("-")[1]);
  try {
    const area = validMoves(Math.abs(currentLength), point, !isNegative(currentLength))
    area.forEach((id) => {
      const el = document.getElementById(`0-${id}`)
      el.classList.add('highlight')
    })
  } catch (e) {
  }
}

function drag(event) {
  event.dataTransfer.setData("id", event.target.id);
  event.dataTransfer.setData("length", event.target.dataset.length);
  currentLength = parseInt(event.target.dataset.length)
}
function drop(event) {
  event.preventDefault();
  document.querySelectorAll(".board1-cell").forEach((node) => {
    node.classList.remove('highlight')
  })
  const itemId = event.dataTransfer.getData("id")
  const el = document.getElementById(itemId)
  const length = parseInt(event.dataTransfer.getData("length"));
  sizes1.push(length);
  const point = deFlatten(event.target.id.split("-")[1]);
  location1.push(point)
  try {
    // const area = validMoves(Math.abs(length), point, !isNegative(length));
    player1.Gameboard.place(Math.abs(length), point, !isNegative(length))
    colorShip(player1);
    el.remove()
    if (isFinished()) {
      // console.log("wtf")
      makeGame()
      // console.log(player2.Gameboard)
    }
  } catch { }
}
const pieces = document.querySelectorAll(".gamePiece");
pieces.forEach((piece) => {
  piece.addEventListener("dragstart", drag);
});


function validMoves(length, [y, x], isVert = true) {
  if (x < 0 || x > 9 || y < 0 || y > 9) throw new Error("You are overboard");

  const places = [];
  for (let i = 0; i < length; i++) {
    if (isVert) {
      const newY = y - i;
      if (newY < 0 || newY > 9) throw new Error("Gone overboard");
      places.push(flatten([newY, x]));
    } else {
      const newX = x + i;
      if (newX < 0 || newX > 9) throw new Error("Gone overboard");
      places.push(flatten([y, newX]));
    }
  }
  return places;
}
function isFinished() {
  const nodes = document.getElementsByClassName('gamePiece')
  return nodes.length == 0
}
function makeGame() {
  buildGameboard()
  changeLabel()
}

function changeLabel(){
  const ann1=document.querySelector('.announce')
  const ann2=document.querySelector('.announce1')
  ann1.classList.add('not-visible')
  ann2.classList.remove('not-visible')
}