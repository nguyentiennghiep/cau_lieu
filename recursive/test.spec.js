// index.test.js
const { subSet } = require("./index");

test("subSet should return all subsets of the given array", () => {
  const input = [1, 2, 3];
  const expectedOutput = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];

  const result = subSet(input);

  // Sort the result and expected output for comparison
  const sortFn = (a, b) => a.length - b.length || a[0] - b[0];
  result.sort(sortFn);
  expectedOutput.sort(sortFn);

  expect(result).toEqual(expectedOutput);
});
