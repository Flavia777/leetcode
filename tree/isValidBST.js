// 判断此二叉树是否是搜索二叉树
// 比根节点小的都在左侧，比根节点大的都在右侧
// 左右子树也符合此规律

// [5,1,4,null,null,3,6] (层级遍历)
/*
          5
      1      4
           3   6
*/


/*

  节点的左子树只包含小于当前节点的数。
  节点的右子树只包含大于当前节点的数。
  所有左子树和右子树自身必须也是二叉搜索树。
  
  以上三点要求最容易解决的就是一个中序遍历，判断遍历出的每个元素后一个元素是否大于前一个元素，如果不符合条件，那么就不是一个二分搜索树。
*/


//  从做左侧最底层的最小子树开始遍历，判断后一个值是否都大于前一个值

/*
          5
      1      4
           3   6
*/

function isValidBST(root) {

  let isValidBSTFlag = true;
  let max = -Number.MAX_VALUE;

  const orderSearch = function(root) {
    // 终止条件（判断当前结点是否为 null）
    if(root) {
      orderSearch(root.left);
      // 判断遍历前后的值是否逐渐升序
      if (root.value > max) {
        // 存储当前结点值，进行下一次比较
        max = root.value
      } else {
        // 当前节点值小于前一结点值，返回 false
        isValidBSTFlag = false;
      }
      orderSearch(root.right);
    }
  }
  orderSearch(root);
  return isValidBSTFlag;
}