import { ListType } from "./_type_"
import { ListNode } from "./node"

const DEFAULT_OPTION: ListType = {
  type: 'oneway', // oneway | bothway
  circle: false,  // false | true
}

export class LinkedList {
  private option: ListType
  private head
  private last
  private length: number = 0
  constructor(option?: ListType) {
    this.option = { ...DEFAULT_OPTION, ...option }
  }
  // 插入第一个元素
  private initList(item) {
    const newNode = this.createNode(item)
    this.head = newNode
    this.last = this.head
    this.length += 1
    return this
  }
  private createNode(item) {
    return new ListNode(item, this.option)
  }
  getValueByIndex(index: number) {
    let cur = 0
    let node = this.head
    while (node) {
      if (cur === index) return node
      node = node.next
      cur++
    }
    return null
  }
  unshift(item) {
    if (!this.head) return this.initList(item)
    const newNode = this.createNode(item)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
    return this
  }
  push(item) {
    if (!this.head) return this.initList(item)
    const newNode = this.createNode(item)
    this.last.next = newNode
    this.last = newNode
    this.length += 1
    return this
  }
  insert(item, index?: number) {
    // 插入根节点或末尾
    if (!index || index >= this.length) return this.push(item)
    if (index === 0) return this.unshift(item)
    // 插入中间
    const newNode = this.createNode(item)
    const prevNode = this.getValueByIndex(index - 1)
    const nextNode = this.getValueByIndex(index)
    newNode.next = nextNode
    prevNode.next = newNode
    this.length += 1
  }
  shift() {
    if (this.length === 0) return undefined
    this.head = this.head.next
    this.length -= 1
    return this
  }
  pop() {
    if (this.length <= 1) return this.shift()
    const prevLast = this.getValueByIndex(this.length - 2)
    this.last = prevLast
    prevLast.next = null
    this.length -= 1
    return this
  }
  getIterator(justValue?:boolean) {
    const _this = this
    return {
      *[Symbol.iterator]() {
        let node = _this.head
        if (!node) yield node
        while (node) {
          yield justValue ? node.value : node
          node = node.next
        }
      }
    }
  }
  deleteByValue(item) {
    let prevNode = this.head
    // 删除开头
    if(prevNode.value === item){
       this.head = prevNode.next
       this.length -= 1
       return this
    }
    if(this.last.value === item) return this.pop()
    let node = prevNode.next
    while(node){
      if(node.value === item){
        prevNode.next = node.next
        this.length -= 1
        return this
      }
      prevNode = node
      node = node.next
    }
    return undefined
  }
  deleteByIndex(index){
    if(index <= 0) return this.shift()
    if(index >= this.length - 1) return this.pop()
    const preIndexNode = this.getValueByIndex(index - 1)
    const nextIndexNode = this.getValueByIndex(index + 1)
    preIndexNode.next = nextIndexNode
    this.length -= 1
  }
  getHead() { return this.head }
  getLast() { return this.last }
  getLength() { return this.length }
}
