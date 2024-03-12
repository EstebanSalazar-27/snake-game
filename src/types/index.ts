// Board Types
type Board = number[][];
type BoardDimentions = {
 w: number;
 h: number;
};

// Adds
type Adds = {
 velocity: {
  effect: number;
  duration: number;
 };
 superFruitsAverageIncrement?: {
  average: number;
 };
};

// Fruits Types
enum FruitRarety {
 c = "common",
 s = "special",
 ss = "super",
}
type FruitAvg = {
 [FruitRarety.c]: number;
 [FruitRarety.s]: number;
 [FruitRarety.ss]: number;
 [key: string]: number;
};
type FruitStats = {
 average: number;
 value: number;
 bonus?: {
  hasBonus: boolean;
  adds?: Adds;
 };
};
type CommonFruit = FruitStats;
type SpecialFruit = FruitStats;
type SuperFruit = FruitStats;
type  AllowedFruits = CommonFruit |  SpecialFruit |  SuperFruit
type Fruits = {
 [FruitRarety.c]: CommonFruit;
 [FruitRarety.s]: SpecialFruit;
 [FruitRarety.ss]: SuperFruit;
 [key: string]: any;
};

//  Averages

export type {
 Adds,
 Board,
 BoardDimentions,
 Fruits,
 FruitStats,
 CommonFruit,
 SpecialFruit,
 SuperFruit,
 FruitRarety,
 FruitAvg,
 AllowedFruits
};
