// 数组中三数之和为某个值

function threeSumArr(nums, target) {
  let arr = [];
  let three;
  let index;
  let tempArr;
  const newArr = nums.sort();  // 先进行排序，为了去重

  // 到倒数第三个数为止
  for(let i = 0; i < newArr.length - 2; i++) {
    // 跳过重复数
    if(newArr[i] !== newArr[i - 1]) {

      // 到倒数第二个数为止
      for(let j = i + 1; j < newArr.length - 1; j++) {
          // 计算第三个数
          three = target - nums[j] - nums[i];

          // 取到第二个数之后的数组
          tempArr = nums.slice(j+1)

          // 判断剩下数中是否含有第三个数
          index = tempArr.indexOf(three);

          if(index > -1) {
            arr.push([nums[i], nums[j], tempArr[index]])   
          }
      }
    }
  }
  return arr;
};