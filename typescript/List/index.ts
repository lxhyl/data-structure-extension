import {ListType} from "./list"

const DEFAULT_OPTION: ListType = {
  type: 'oneway', // oneway bothway
  circle:false,  // false true
  storeType: 'object' // object array map
}

class LinkedList {
  [x: string]: any
  constructor(option: ListType) {
     this.option = {...option,...DEFAULT_OPTION} 
     this.length = 0 
  }
}

export default LinkedList   