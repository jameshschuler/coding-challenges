/**
 *
 * Given an array of 0s and 1s that represent a garden, where 0 is a plot that hasn’t been planted on,
 * and 1 is a plot that has been planted on, return true if n plants can be planted without touching another plant.
 *
 * garden = [1,0,0,0,1]
 * canPlant(garden, 2)
 * true // plant at position 2
 * canPlant(garden, 4)
 * false // there are only 3 plots, and two of them can't be planted on
 *
 */
export function canPlant(garden: number[], plot: number): boolean {
  let canPlant = false;

  if (garden[plot] === undefined || garden[plot] === 1) {
    return canPlant;
  }

  const prev = garden[plot - 1];
  const next = garden[plot + 1];

  if (prev !== undefined && prev === 0 && next !== undefined && next === 0) {
    canPlant = true;
  } else if (prev === undefined && next !== undefined && next === 0) {
    canPlant = true;
  } else if (prev !== undefined && prev === 0 && next === undefined) {
    canPlant = true;
  }

  return canPlant;
}
