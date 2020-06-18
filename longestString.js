// 寻找两个字符串中的最长公共子串
// eg：在单词 raven 和 havoc中，最长的公共子串是“av”

// 暴力破解发（两层循环逐个对比）(非常非常耗费性能)
function maxSubString(str1, str2) {
  if (!str1 || !str2) {
    throw new TypeError();
  }

  const len1 = str1.length;
  const len2 = str2.length;
  let maxStr = '';

  for(let i = 0; i < len1; i++) {
    for(let j = 0; j < len2; i++) {
      let tempStr = '';
      let k = 0;
      while ((i + k < len1) && (j + k < len2) && (str1[i + k] === str2[j + k])) {
        tempStr += str1[i];
        k++;
      }

      if (tempStr.length > maxStr.length) {
        maxStr = tempStr;
      }
    }
  }

  return maxStr
}


// 动态规划
// 创建一个二维数组 tempArr
/*
          a   b   c   d   e   f   g

      0   0   0   0   0   0   0   0     // 多加一行一列，均为0，为后边计算公共子串长度做准备

  a   0   1   0   0   0   0   0   0     // 行列相等时，值为1  tempArr[1][1] = 1

  b   0   0   2   0   0   0   0   0     // 行列相等，且前一行一列也相等时，值为前一格的值+1，即为此子串的长度   tempArr[2][2] = temp[1][1] + 1 = 2

  a   0   1   0   0   0   0   0   0     // 1 = 0 + 1

  b   0   0   2   0   0   0   0   0     // 2 = 1 + 1

  c   0   0   0   3  0   0   0   0      // 3 = 2 + 1      maxLength = 3  endIndex = 5

  z   0   0   0   0   0   0   0   0     

  e   0   0   0   0   0   1   0   0
*/


// str1: ababcze    str2: abcdef
// 最长公共子串： abc  
function maxSubString(str1, str2) {
  let endIndex = 0;
  let maxLength = 0;
  const len1 = str1.length;
  const len2 = str2.length;

  const tempArr = new Array(len1 + 1);  // 定义一个数组

  for(let i = 0; i < len1 + 1; i ++) {

    tempArr[i] = new Array(len2 + 1);  // 二维数组，多加一行一列

    for (let j = 0; j < len2 + 1; j++) {

      if (i === 0 || j === 0) {
        tempArr[i][j] = 0;       // 第一行第一列值为0
      } else {
        if (str1[i - 1] === str2[j - 1]) {    // str1 和 str2 的计数比 tempArr 小1，  所以要-1
          tempArr[i][j] = tempArr[i - 1][j - 1] + 1;   // i行j列  值为  前一格的值 + 1 （用于计算当前子串的长度）
        } else {
          tempArr[i][j] = 0;  // 不相等记为0
        }
      }

      // 替换最长子串的长度  和  结束的index
      if (maxLength < tempArr[i][j]) {
        maxLength = tempArr[i][j];
        endIndex = i;
      }     
    }
  }

  let str = "";
  if (maxLength == 0){   // 最长子串长度为0，即没有相同的子串
      return ;
  } else {
    // endIndex- maxLength 计算出最长子串的起始index，str1的计数 比 tempArr 小1， 正好不用 + 1了，跳出循环的条件为结束的下标
    for(let i = endIndex - maxLength; i < endIndex; i++){
        str += str1[i];
    }
    return str;
  }
}