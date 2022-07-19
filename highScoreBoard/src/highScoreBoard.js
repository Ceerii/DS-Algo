/**
 *
 *
 * @return {Record<string, number>} new score board
 */
export function createScoreBoard() {
  return {'The Best Ever': 1000000};
}
/**
 *
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @return {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  const key = player;
  scoreBoard[key] = score;
  return scoreBoard;
}
/**
 *
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @return {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}
/**
 *
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @return {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}
/**
 *
 *
 * @param {Record<string, number>} scoreBoard
 * @return {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  for (const key in scoreBoard) {
    if (key) {
      scoreBoard[key] += 100;
    }
  }
  return scoreBoard;
}
/**
 *
 *
 * @param {Params} params the parameters for performing the normalization
 * @return {number} normalized score
 */
export function normalizeScore(params) {
  const score = params['score'];
  const normalizeFunction = params['normalizeFunction'];
  return normalizeFunction(score);
}
