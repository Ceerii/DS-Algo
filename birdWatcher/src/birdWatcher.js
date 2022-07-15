/**
 *
 *
 * @param {number[]} birdsPerDay
 * @return {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalCount += birdsPerDay[i];
  }
  return totalCount;
}
/**
 *
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @return {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const startCount = (week - 1) * 7;
  const endCount = startCount + 7;
  let count = 0;
  for (let i = startCount; i < endCount; i++) {
    count += birdsPerDay[i];
  }
  return count;
}
/**
 *
 *
 *
 * @param {number[]} birdsPerDay
 * @return {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    const checkEven = ((i + 1) % 2) == 0;
    birdsPerDay.splice(i, 1, checkEven ? birdsPerDay[i] : birdsPerDay[i] + 1);
  }
  return birdsPerDay;
}
