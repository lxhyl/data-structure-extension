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


