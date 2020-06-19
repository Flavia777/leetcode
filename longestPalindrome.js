// 寻找最长回文子串

// 暴力破解发（根据对称的特点）

function longestPalindrome(s) {
  let str = "";
  for(let i = 0; i < s.length; i++) {
    for(let j = i + 1; j <= s.length; j++) {
      const temp = s.slice(i, j);
      if(temp == temp.split("").reverse().join("") && temp.length > str.length) {
          str = temp;
      }
    }
  }
  return str;
}


// 动态规划

/*
  首先考虑如果字符串长度为1，那么答案就是其本身

  如果字符串长度等于2，那么如果s[i] == s[j] 则说明该字符串为回文

  那么如果长度大于2呢？s[i] == s[j]的情况下s[i - 1] == s[j + 1]，也说明该字符串为回文
*/

var longestPalindrome = function(s) {
  if (s.length == 1) {
    // 长度1，返回本身
    return s;
  }
  
  // 创建二阶数组存储从j到i是否是回文数组，0为不回文，1为回文
  let arr = [];
  for (let i = 0; i < s.length; i ++) {
      arr[i] = [];
  };
  
  // 存储最长回文子串的起始位置
  let begin = 0;
  // 存储最长子串的长度
  let max = 0;

  for(let i = 0; i < s.length; i ++) {
    let j = 0;
    while (j <= i) {
      // 如果 i-j <= 1 时，说明i位置和j位置要么是重合的，要么是相邻的，即为最后一次查找
      // 否则继续查询[j + 1]到[i - 1]是否为回文
      if( s[j] == s[i] && (i - j <= 1 || arr[j + 1][i - 1] ) ) {
        // 如果符合上述条件，说明j到i是回文
        arr[j][i] = 1
        if (i - j + 1 > max) {
          // 如果当前子串大于存储的子串长度，则替换之
          begin = j;
          // 注意+1，比如从3到5的长度为3 = 5 - 3 + 1
          max = i - j + 1;
        }
      }
      j ++;
    }
  }
  return s.substr(begin, max);
}