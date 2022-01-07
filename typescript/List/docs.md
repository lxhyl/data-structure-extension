# Linked List    
 

*链表（Linked List）：是一种 非连续、非顺序 存储的线性结构。*  


## constructor

* `new LinkedList(option)`  

```ts
option:{
  type:'oneway' | 'bothway' // 单项或双向链表  
  circle:false | true // 是否是循环链表
  storeType:'object' | 'array' | 'map' // 用什么存储
}
```  

## methods  

* `unshift(item)` 插入item至开头
* `push(item)` 插入item至链表尾
* `pop()` 删除末尾
* `shift()` 删除开头
* `insert(item,index?)`   插入item至index处
* `getValueByIndex(index)`   获取index处的值
* `deleteByValue(value)`  根据节点的值删除
* `deleteByIndex(index)`  根据节点的索引删除
* `getRoot()`   获取根节点
* `getLast()`  获取尾节点
* `getLength()`  获取长度
* `getIterator()` 返回一个可迭代对象。可以使用`for of`等遍历


