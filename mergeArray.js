// 数组合并去重

function mergeArr() {
  const res = [];
  const arr = [...arguments];
  const mergeArrs = arr.reduce((a, b) => a.concat(b));
  mergeArrs.forEach(item => {
    if(res.indexOf(item) == -1){
      res.push(item);
    }
  });

  return res;
}


// 数组去重
// item的下标 与其在数组中最后一次出现的下标不等，则删除
// splice改变原数组
arr.forEach((item, index) => {
  if(index != arr.lastIndexOf(item)){
      arr.splice(index,1);
  }
})


// 开辟一个外部存储空间用于标示元素是否出现过。
const unique = (array)=> {
  var container = [];
  array.filter((item, index) =>  {
    if(container.indexOf(item) == -1) {
      container.push(item);
    }
  });
  return container;
}


// indesOf + filter
const unique = arr => arr.filter((e,i) => arr.indexOf(e) === i);

// 返回新数组
function removeSame(arr) {
  return arr.filter((item,index) => 
   index === arr.lastIndexOf(item));
}


// 排序，通过比较相邻数字是否重复来去重
const unique = (array) => {
  array.sort((a, b) => a - b);
  let pre = 0;
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!i || array[i] != array[pre]) {
      result.push(array[i]);
    }
    pre = i;
  }
  return result;
}
