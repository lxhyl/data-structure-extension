import {ListType} from "./list"

export class ListNode<T>{
  value:T
  next:T | null
  prev:T | null
  constructor(value:T,option:ListType){
    const {type} = option
    this.value = value
    this.next = null
    if(type !== 'oneway') this.prev = null
  }
}