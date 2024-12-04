/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) {
    return [[1]];
  }
  let output = [[1], [1, 1]];
  for (i = 2; i <= numRows - 1; i++) {
    output[i] = new Array(i + 1);
    output[i][0] = 1;
    output[i][i] = 1;
    for (y = 0; y < i - 1; y++) {
      let result = output[i - 1][y] + output[i - 1][y + 1];
      output[i][y + 1] = result;
    }
  }
  return output;
};
