# Heap   

*堆是计算机科学中的一种特别的完全二叉树*

* 任意节点大于(或小于)等于其子节点   
* 堆顶即为极值    
* 堆是用数组存储的

堆的特点决定了找最大值或者最小值的时间复杂度是`1`，所以使用堆进行排序,可以做到时间复杂度`n log(n)`,空间复杂度为`1`

如果遇到要找出一组元素中的极值问题，使用堆这种数据哦结构就会特别方便。例如:      
* [912.排序数组](https://leetcode-cn.com/problems/sort-an-array/)      
* [215.数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)   
* [1705.吃苹果的最大数目](https://leetcode-cn.com/problems/maximum-number-of-eaten-apples/)  


## constructor  

*  `new Heap(option,data)`   

```ts
option:{
  type: 'minHeap' | 'maxHeap' // 最大堆或最小堆
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

# Linked List    
 

*链表（Linked List）：是一种 非连续、非顺序 存储的线性结构。*  


## constructor

* `new LikedList(option)`  

```ts
option:{
  type:'oneway' | 'bothway' // 单项或双向链表  
  circle:false | true // 是否是循环链表
  storeType:'object' | 'array' | 'map' // 用什么存储
}
```  

## methods  

* `insert(item)`   插入
* `get(item)`    获取item
* `delete(item)`  删除
* `getRoot()`   获取根节点
* `getLast()`  获取尾节点
* `getLength`  获取长度
* `getIterator` 返回一个可迭代对象。可以使用`for of`等遍历


