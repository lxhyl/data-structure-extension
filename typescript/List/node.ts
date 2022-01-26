import {ListType} from "./_type_"

export class ListNode<T>{
   value:T
   next:T | null
   prev:T | null
  constructor(value:T,option:ListType){
    const {type} = option
    this.value = value
    this.next = null
    if(type === 'bothway') this.prev = null
  }
}