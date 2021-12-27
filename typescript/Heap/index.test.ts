import Heap from "./index"

describe("simple number item heap", () => {

  test("build heap", () => {
    expect(new Heap({}, [10, 5, 1, 0]).allData()).toEqual([0, 5, 1, 10])
  })

  const minHeap = new Heap({ type: "minHeap" }, [5, 1, 10, 0, -5])

  test("top num should be min", () => {
    expect(minHeap.get()).toBe(-5)
  })

  test("top still min when delete a value ", () => {
    minHeap.delete()
    expect(minHeap.get()).toBe(0)
    expect(minHeap.allData()).toEqual([0, 1, 10, 5])
    expect(minHeap.delete().get()).toBe(1)
    minHeap.delete()
    expect(minHeap.get()).toBe(5)
  })

  test("insert a value top still min", () => {
    minHeap.insert(-20)
    expect(minHeap.get()).toBe(-20)
  })

  test("heap sort", () => {
    expect(minHeap.sort()).toEqual([10, 5, -20])
  })

  // 排序后需重建堆   
  test("rebuild heap", () => {
    expect(minHeap.build().allData()).toEqual([-20, 5, 10])
    expect(minHeap.get()).toBe(-20)
  })
})
