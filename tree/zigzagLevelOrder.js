/*
  给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）

  方法：先按从左往右进行层次遍历，得到一个二维数组，将数组中的奇数位进行反转，即为锯齿形的层次遍历结果
*/


var zigzagLevelOrder = function(root) {
  let res = [];
  const order = function(node, depth = 0) {
      if(!node) return [];
      if(!res[depth]) {
          res[depth] = [node.val];
      } else {
          res[depth].push(node.val);
      }
      node.left && order(node.left, depth + 1, res);
      node.right && order(node.right, depth + 1, res);
      
  }
  order(root);
  res.forEach((item, index) => index % 2 === 1 && item.reverse());
  return res;
};
