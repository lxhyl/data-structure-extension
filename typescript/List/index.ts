import {ListType,NodeType} from "./list"
import {ListNode} from "./node"

const DEFAULT_OPTION: ListType = {
  type: 'oneway', // oneway bothway
  circle:false,  // false true
  storeType: 'object' // object array map
}

export class LinkedList{
  [x: string]: any
  private option:ListType
  private length:number = 0
  private root
  private last
  constructor(option?: ListType) {
     this.option = {...DEFAULT_OPTION,...option} 
  }
  insert(item){
     if(!this.root){
       this.root = new ListNode(item,this.option)
       this.last = this.root
       this.length += 1
       return
     }
     this.last.next = new ListNode(item,this.option)
     this.last = this.last.next
     this.length += 1
  }
  getIterator(){
    const _this = this
    return {
      *[Symbol.iterator](){
         let node = _this.root
         if(!node) yield node
         while(node){
           yield node.value
           node = node.next
         }
      }
    }
  }
  delete(){}
  getRoot(){ return this.root }
  getLast(){ return this.last }
  getLength(){ return this.length }
}
