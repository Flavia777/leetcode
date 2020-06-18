// 斐波那契数列： 0, 1, 1, 2, 3, 5, 8, 13...

// 第一种：递归方法(过于耗费性能)
function fibo(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibo(n - 1) + fibo(n - 2);
}


// 第二种：节省性能
function fibo(n) {
  const arr = [0, 1];
  if (n < 2) return arr[n];

  for (let i = 2; i < n; i ++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n]
}

// 第三种：继续改进，省掉数组
function fibo(n) {
  const arr = [0, 1];
  if (n < 2) return arr[n];

  let res, a = 0, b = 1;

  for (let i = 2; i < n; i ++) {
    res = a + b;
    a = b;
    b = res;
  }
  return res;
}

// 第四种：继续优化，节省一个变量
function fibo(n) {
  const arr = [0, 1];
  if (n < 2) return arr[n];

  let a = 0, b = 1;

  for(let i = 0; i < n; i++) {
    b = a + b;
    a = b - a;
  }

  return b;
}




