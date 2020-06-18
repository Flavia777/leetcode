// 寻找 最大和的连续子数组（子数组最少包含一个元素），返回其最大和
// [2, -1, -3, 4, 7, -8, 4]

function maxSubArray(arr) {
  if (arr.length < 2) return arr[0];

  let sum = 0;
  let subArray;

  // 两层循环，挨个计算所有子数组的和
  for(let i = 0; i < arr.length; i++) {

    let temp = arr[i];
    let tempArr = [arr[i]];

    for(let j = i + 1; j < arr.length; j++) {

      temp += arr[j];
      tempArr.push(arr[j]);

      // 比较纪录的最大和 和 当前子数组的和，并替换
      if (sum < temp) {
        sum = temp;
        subArray = tempArr;
      }
    }
  }

  return sum;
}


/*
  优化：
    当前值为arr[i], 加上 arr[i]的值 还小于arr[i], 意味着之前的和为负值，
    则可之前抛弃之前的数组，从arr[i]重新进行计算和
*/

function maxSubArray(arr) {

  if(arr.length < 2) return arr[0];

  let sum = arr[0];
  let maxSum = arr[0];
  let maxSubArray = [arr[0]];
  let subArray = [arr[0]];

  for(let i = 1; i < arr.length; i++) {
                                   // 仅计算最大和，不求具体数组
    sum += arr[i];                 // sum = Math.max(sum + arr[i], arr[i]);
    subArray.push(arr[i]);         // maxSum = Math.max(sum, maxSum)

    // 判断数组加和是否小于arr[i], true则从arr[i]重新计算
    if (arr[i] > sum) {
      sum = arr[i];
      subArray = [arr[i]]
    }

    if (maxSum < sum) {
      maxSum = sum;
      maxSubArray = [].concat(subArray);  // 直接使用等于，会随着subArray的改变而改变
    }
  }

  return maxSum;
}