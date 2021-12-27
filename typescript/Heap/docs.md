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

* `build()` 构建堆
* `insert(value)` 新插入一个值   
* `get()`  返回堆顶元素
* `delete()` 删除堆顶元素
* `sort()` 堆排序   *排序后将不再是一个堆，如果想得到堆，需重新构建*
* `allData()` 返回所有值

## eg  

```js
import Heap from "./index.ts" 
const heap = new Heap({type:'minHeap'},[1,5,-2,10])
heap.get()  // -2
```