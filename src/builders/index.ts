// Builders

import { BASIC_FRUIT_AVGS, BASIC_FRUIT_STATS, EMPTY_CELL } from "../consts";
import { Board, BoardDimentions, FruitAvg, Fruits } from "@/types";

/**
 *
 * @description This function set the custom player fruit averages, system values set by default
 * @param  {number} common_avg
 * @param  {number} special_avg
 * @param  {number} super_avg
 * @returns  {Averages}  Return de fruits average
 */
const buildFruitsAverage = ({
 common = BASIC_FRUIT_AVGS.common,
 special = BASIC_FRUIT_AVGS.special,
 super: _super = BASIC_FRUIT_AVGS.super,
}: FruitAvg): FruitAvg => {
 return {
  common: common,
  special: special,
  super: _super,
 };
};
/**
 *
 * @description This function build the playing board, dimentions are gonna depend on the config specified by the developer in this case CROSS-Y30 & CROSS-X12
 * @param {number} h
 * @param {number} w
 * @type {BoardDimentions}
 * @returns {Board} return the matriz such as playing board
 */
const buildBoard = ({ h, w }: BoardDimentions): Board =>
 Array.from({ length: h }, () => Array(w).fill(EMPTY_CELL));
/**
 *
 * @param {Averages} userAverageConf
 *
 * @returns {Fruits} - This function return the fruits applying the average config of the player
 */
function buildFruits(userAverageConf?: FruitAvg): Fruits {
 const fruits: Fruits = {
  common: BASIC_FRUIT_STATS.common,
  special: BASIC_FRUIT_STATS.special,
  super: BASIC_FRUIT_STATS.super,
 };

 for (let key in fruits) {
  if (userAverageConf && userAverageConf[key]) {
   fruits[key].average = userAverageConf[key];
  }
 }

 return fruits;
}

export { buildBoard, buildFruits, buildFruitsAverage };
