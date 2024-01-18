const boardLength = 10;
const boardArea = 100;

function flatten([y, x]) {
  return y * boardLength + x;
}

function deFlatten(value) {
  const x = value % boardLength;
  const y = Math.floor(value / boardLength);

  return [y, x];
}

class Ship {
  constructor(length) {
    this.length = length;
    this.numberOfHits = 0;
    this.sunk = false;
  }
  get length() {
    return this._length;
  }
  set length(value) {
    if (value <= 0) {
      throw new Error("Ship can't have negative or zero length");
    }
    this._length = value;
    this.isSunk();
  }
  hit() {
    this.numberOfHits++;
    if (this.numberOfHits >= this.length) {
      this.sunk = true;
    }
    return this.numberOfHits;
  }
  isSunk() {
    if (this.numberOfHits >= this.length) {
      this.sunk = true;
      return this.sunk;
    }
    this.sunk = false;
    return this.sunk;
  }
}

class Gameboard {
  constructor() {
    this.ships = [];
    this.missedMoves = [];
    this.sunk = [];
    this.id = 0;
  }
  place(length, [y, x], isVert = true) {
    if (x < 0 || x > 9 || y < 0 || y > 9) throw new Error("You are overboard");

    const places = [];
    const ship = new Ship(length);
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

    this.ships.push({ id: this.id++, ship, places });
  }
  receiveAttack([y, x]) {
    if (x < 0 || x > 9 || y < 0 || y > 9) throw new Error("You are overboard");
    const flat = flatten([y, x]);
    let wasHit = false;
    this.ships.forEach((val) => {
      if (val.places.includes(flat)) {
        val.ship.hit();
        wasHit = true;
      }
      if (val.ship.isSunk()) {
        this.sunk.push(val);
      }
    });

    if (!wasHit) {
      this.missedMoves.push(flat);
    }
  }
  allSunk() {
    return this.ships.every((val) => val.ship.isSunk());
  }
}

export { Ship, flatten, deFlatten, Gameboard };
