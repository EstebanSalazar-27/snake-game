import {
 BoardDimentions,
 CommonFruit,
 FruitAvg,
 FruitRarety,
 FruitStats,
 SpecialFruit,
 SuperFruit,
} from "@/types";

// DEFAULT VALUES
const BOARD_HEIGHT = 30;
const BOARD_WIDTH = 12;
const EMPTY_CELL = 0;
const APPER_FRUIT_AVERAGE = 0.3;
const BASIC_COMMON_FRUIT_AVG = 0.65;
const BASIC_SPECIAL_FRUIT_AVG = 0.2;
const BASIC_SUPER_FRUIT_AVG = 0.1;

//  DEFAULT FRUIT STATS
const BASIC_COMMON_FRUIT_STATS: CommonFruit = {
 average: BASIC_COMMON_FRUIT_AVG,
 value: 1,
 bonus: {
  hasBonus: false,
 },
};
const BASIC_SPECIAL_FRUIT_STATS: SpecialFruit = {
 average: BASIC_SPECIAL_FRUIT_AVG,
 value: 3,
 bonus: {
  hasBonus: true,
  adds: {
   velocity: {
    effect: 20,
    duration: 10,
   },
  },
 },
};
const BASIC_SUPER_FRUIT_STATS: SuperFruit = {
 average: BASIC_SUPER_FRUIT_AVG,
 value: 8,
 bonus: {
  hasBonus: true,
  adds: {
   velocity: {
    effect: 100,
    duration: 25,
   },
  },
 },
};

//  Structures
const BASIC_FRUIT_STATS: Record<FruitRarety, FruitStats> = {
 common: BASIC_COMMON_FRUIT_STATS,
 special: BASIC_SPECIAL_FRUIT_STATS,
 super: BASIC_SUPER_FRUIT_STATS,
};
const BASIC_BOARD_DATA: BoardDimentions = {
 h: BOARD_HEIGHT,
 w: BOARD_WIDTH,
};
const BASIC_FRUIT_AVGS: FruitAvg = {
 common: BASIC_COMMON_FRUIT_AVG,
 special: BASIC_SPECIAL_FRUIT_AVG,
 super: BASIC_SUPER_FRUIT_AVG,
};

export {
 APPER_FRUIT_AVERAGE,
 BASIC_FRUIT_AVGS,
 BASIC_FRUIT_STATS,
 BASIC_BOARD_DATA,
 EMPTY_CELL,
};
