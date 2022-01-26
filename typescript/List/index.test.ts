import {LinkedList} from "./index"


describe("object linkedList default option",() => {
   const root = new LinkedList()
   test("insert & delete methods",() => {
       //插入 
       root.insert(1)
       expect(root.getHead()).toEqual({value:1,next:null})
       expect(root.getLast()).toEqual({value:1,next:null})
       expect(root.getLength()).toBe(1)
       // 插至末尾
       root.insert({id:1,value:2},10)
       expect(root.getHead()).toEqual({value:1,next:{value:{id:1,value:2},next:null}})
       expect(root.getLast()).toEqual({value:{id:1,value:2},next:null})
       expect(root.getLength()).toBe(2)
       // 插至index === 1
       root.insert(2,1)
       expect(root.getValueByIndex(1)).toEqual({value:2,next:{value:{id:1,value:2},next:null}})
       // 插至开头
       root.unshift('root')
       // root => 1  => 2 => {id:1,value:2}
       expect(root.getValueByIndex(0)).toBe(root.getHead())
       expect(root.getLength()).toBe(4)
       root.pop()
       expect(root.getLast()).toEqual({value:2,next:null})
       root.deleteByValue('root')
       expect(root.getHead().value).toBe(1)
       root.deleteByIndex(1)
       expect(root.getHead().value).toBe(1)
   })
   test("iterator and getValueByIndex",() => {
      const iter = root.getIterator()
      let index = 0
      for(let item of iter){
         const node =root.getValueByIndex(index)
         expect(item).toBe(node)
         index++
      }
     
   })
})