# Heap   

*堆是计算机科学中的一种特别的完全二叉树*
   

## constructor  

*  `new Heap(options,data)`   

```js
options:{
  type: minHeap | maxHeap // 最大堆或最小堆
  compareFun?: Function // 自定义比较函数  eg: (a,b) => a.value > b.value 
}
data:Array<any> // 原始数据
```

## methods  

* `insert(value)` 新插入一个值   
* `get()`  返回堆顶元素
* `delete()` 删除堆顶元素
* `sort()` 堆排序

