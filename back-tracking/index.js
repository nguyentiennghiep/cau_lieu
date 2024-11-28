// Đề bài: Cho một mảng arr, tìm tất cả các hoán vị của mảng đó

const hoanVi = (arr) => {
  const result = [];
  const backTrack = (temp, used) => {
    if (temp.length === arr.length) {
      result.push([...temp]);
    }

    for (let i = 0; i < arr.length; i++) {
      if (!used[i]) {
        temp.push(arr[i]);
        used[i] = true;
        backTrack(temp, used);
        temp.pop();
        used[i] = false;
      }
    }
  };
  backTrack([], Array(arr.length).fill(false));
  return result;
};

//  Chuỗi nhị phân độ dài n
const binaryString = (n) => {
  const result = [];

  const backTrack = (temp, start) => {
    if (start === n) {
      result.push(temp.join(""));
      return;
    }
    for (let bit of [0, 1]) {
      temp[start] = bit;
      backTrack(temp, start + 1);
    }
  };

  backTrack(Array(n).fill(0), 0);
  return result;
};

function generateBinaryStrings(n) {
  const result = [];

  // Hàm backtracking
  function backtrack(current) {
    // Điều kiện dừng: Nếu độ dài chuỗi hiện tại bằng n, thêm vào kết quả
    if (current.length === n) {
      result.push(current);
      return;
    }

    // Thử thêm '0'
    backtrack(current + "0");

    // Thử thêm '1'
    backtrack(current + "1");
  }

  // Bắt đầu backtracking với chuỗi rỗng
  backtrack("");
  return result;
}

const ngoac = (n) => {
  const result = [];
  const backTrack = (temp, op, cl) => {
    if (temp.length === n * 2) {
      result.push(temp);
      return;
    }
    if (op < n) {
      //   temp += "(";
      backTrack(temp + "(", op + 1, cl);
    }

    if (cl < op) {
      //   temp += ")";
      backTrack(temp + ")", op, cl + 1);
    }
  };
  backTrack("", 0, 0);
  return result;
};

console.log("result", ngoac(2));
