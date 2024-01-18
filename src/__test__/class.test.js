import { Ship, flatten, deFlatten, Gameboard } from "../class";
import { describe, expect, test } from "@jest/globals";

describe("Testing Ship class", () => {
  test("testing construction of ship", () => {
    const ship1 = new Ship(4);
    expect(ship1.length).toBe(4);
    expect(ship1.numberOfHits).toBe(0);
    expect(ship1.sunk).toBe(false);
    expect(() => new Ship(0)).toThrow();
  });
  test("testing hit calculation", () => {
    const ship2 = new Ship(1);
    expect(ship2.numberOfHits).toBe(0);
    ship2.hit();
    expect(ship2.numberOfHits).toBe(1);
    expect(ship2.sunk).toBe(true);
    expect(ship2.isSunk()).toBe(true);
    ship2.length = 2;
    expect(ship2.isSunk()).toBe(false);
    expect(ship2.sunk).toBe(false);
  });
});

describe("flatten and deFlatten tests", () => {
  test("flatten array", () => {
    expect(flatten([0, 0])).toBe(0);
    expect(flatten([0, 9])).toBe(9);
    expect(flatten([8, 2])).toBe(82);
    expect(deFlatten(56)).toEqual([5, 6]);
    expect(deFlatten(99)).toEqual([9, 9]);
    expect(deFlatten(55)).toEqual([5, 5]);
  });
});

describe("Testing Gameboard class", () => {
  test("testing placing", () => {
    const Gameboard1 = new Gameboard();
    Gameboard1.place(4, [8, 6]);
    expect(Gameboard1.ships[0].places).toEqual([86, 76, 66, 56]);
    Gameboard1.place(4, [8, 1], false);
    expect(Gameboard1.ships[1].places).toEqual([81, 82, 83, 84]);
    Gameboard1.place(1, [2, 2]);
    expect(Gameboard1.ships[2].places).toEqual([22]);
    Gameboard1.place(3, [6, 3], false);
    expect(Gameboard1.ships[3].places).toEqual([63, 64, 65]);

    expect(() => Gameboard1.place(3, [10, 0])).toThrow();
    expect(() => Gameboard1.place(4, [0, 0])).toThrow();
    expect(() => Gameboard1.place(3, [0, 7])).toThrow();
    expect(() => Gameboard1.place(3, [8, 8], false)).toThrow();
  });
  test("test receivedAttack and allSunk", () => {
    const Gameboard2 = new Gameboard();
    Gameboard2.place(3, [8, 6]);
    Gameboard2.receiveAttack([5, 5]);
    expect(Gameboard2.missedMoves).toEqual([55]);
    Gameboard2.receiveAttack([8, 6]);
    expect(Gameboard2.missedMoves).toEqual([55]);
    Gameboard2.receiveAttack([7, 6]);
    Gameboard2.receiveAttack([6, 6]);
    Gameboard2.receiveAttack([1, 2]);
    expect(Gameboard2.missedMoves).toEqual([55, 12]);
    expect(Gameboard2.sunk[0].places).toEqual([86, 76, 66]);
    expect(Gameboard2.sunk[0].ship.length).toBe(3);
    expect(Gameboard2.allSunk()).toBe(true);
    Gameboard2.place(2, [8, 1], false);
    expect(Gameboard2.allSunk()).toBe(false);
    Gameboard2.receiveAttack([8, 1]);
    Gameboard2.receiveAttack([8, 2]);
    expect(Gameboard2.allSunk()).toBe(true);
  });
});
