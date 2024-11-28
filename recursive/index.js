// Viết một hàm đệ quy để tìm tất cả các tập con của một mảng cho trước.

const subSet = (arr) => {
  if (arr.length === 0) return [[]];
  const subArr = subSet(arr.slice(1));
  const newSub = subArr.map((ele) => [arr[0], ...ele]);
  return [...subArr, ...newSub];
};

// Viết một hàm đệ quy để tìm tất cả các tổ hợp của k phần tử từ một mảng cho trước.
const toHop = (arr, k) => {
  const subSets = subSet(arr);
  return subSets.filter((e) => e.length === k);
};

// Viết một hàm đệ quy để tìm tất cả các tổ hợp của k phần tử từ một mảng cho trước.
function findCombinations(arr, k) {
  const result = [];

  function helper(start, combination) {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combination.push(arr[i]);
      helper(i + 1, combination);
      combination.pop();
    }
  }

  helper(0, []);
  return result;
}
// console.log("reuslt:",subSet([1,2,3]))
console.log("reuslt:", toHop([1, 2, 3, 5], 2));

module.exports = { subSet };
