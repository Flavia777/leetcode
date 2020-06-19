/*
  二叉搜索树中的两个节点被错误地交换。

  请在不改变其结构的情况下，恢复这棵树。
*/

// 只有两个节点错位，则可利用  中序遍历（节点值递增）的特点 来找出这两个节点
// [1, 4, 3, 2]   4和2就是那两个错位的节点


function recoveTree(root) {
  let arr = [];

  const searchRoot = function(node) {
    if(!node) return null;
    node.left && searchRoot(node.left);
    arr.push(node.value);
    node.right && searchRoot(node.right);
  }

  searchRoot(root);

  let s1 = null;
  let s2 = null;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      !s1 && (s1 = arr[i]);
      s2 = arr[i+1];
    }
  }
  // [s1, s2] = [s2, s1];   交换s1 和s2
  return arr;
}



function recoveTree(root) {
  let res = [];
  let s1 = s2 = null;
  const orderSearch = root => {
    if (root) {
      orderSearch(root.left);
      if (res.length !== 0) {
        if (res[res.length - 1].val > root.val) {
          // 第一个找到的才是s1
          !s1 && (s1 = res[res.length - 1]);
          // 若有第二次，第二次的才是s2
          s2 = root;
        }
      }
      
      res.push(root)
      orderSearch(root.right);
    }
  }
  orderSearch(root);
  [s1.val, s2.val] = [s2.val, s1.val];
  return root;
}