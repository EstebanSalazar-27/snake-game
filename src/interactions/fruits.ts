// Fruits Interactions

import { APPER_FRUIT_AVERAGE, EMPTY_CELL } from "../consts";
import { Board, Fruits } from "@/types";

/**
 *
 * @description This function has the logic to select a fruit depending on the average specified for the player or set by default for the developer.
 * @param  {Fruits} fruits - Fruits to appers on the table
 * @returns {number} - Return the value of the fruit selected
 */
function getRandomFruit(fruits: Fruits): number {
 // Random number [0 - 1]
 const randomNumber: number = Math.random();
 const {
  common: { value: commonVal, average: commonAvg },
  special: { value: specialVal, average: SpecAvg },
  super: { value: superVal },
 } = fruits;
 // Assign fruit based on average
 let selectedFruit: number = EMPTY_CELL; // By default empty cell
 if (randomNumber < commonAvg) {
  selectedFruit = commonVal; // Common Fruit >(
 } else if (randomNumber < commonAvg + SpecAvg) {
  selectedFruit = specialVal; // Special Fruit  :P
 } else {
  selectedFruit = superVal; // Super Fruit :3
 }

 return selectedFruit;
}

/**
 *
 * @description This function apper the fruits on the table, this is gonna depends on how much APPER_FRUIT_AVERAGE it's defined, By default it's .3
 * @constructor
 * @param {Fruits} fruits - Fruits to appers on the table
 * @param {Board} board - Game Board
 * @returns {void} - Nothing this functions only modify the board
 */
function appearFruits(fruits: Fruits, board: Board): void {
 if (!fruits || !board || !Array.isArray(board)) {
  throw new Error("Invalid fruits or board parameters");
 }

 // rows iteration
 board.forEach((row, rowIndex) => {
  //  columns iteration
  row.forEach((_, columnIndex) => {
   // 30% average to  put a fruit on a cell
   if (Math.random() < APPER_FRUIT_AVERAGE) {
    const selectedFruit: number = getRandomFruit(fruits);
    board[rowIndex][columnIndex] = selectedFruit;
   } else {
    board[rowIndex][columnIndex] = EMPTY_CELL; // Asignar 0 para indicar celda vacía
   }
  });
 });
}

export { appearFruits };
