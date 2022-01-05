import {LinkedList} from "./index"
import {NodeType} from "./list"

describe("object linkedList default option",() => {
   const root = new LinkedList()
   test("insert",() => {
       root.insert(1)
       expect(root.getRoot()).toEqual({value:1,next:null})
       expect(root.getLast()).toEqual({value:1,next:null})
       expect(root.getLength()).toBe(1)
       root.insert({id:1,value:2})
       expect(root.getRoot()).toEqual({value:1,next:{value:{id:1,value:2},next:null}})
       expect(root.getLast()).toEqual({value:{id:1,value:2},next:null})
       expect(root.getLength()).toBe(2)
   })
   test("iterator",() => {
      const iter = root.getIterator()
      const value = [1,{id:1,value:2}]
      for(let item of iter){
        console.log("item",item)
      }
   })
})