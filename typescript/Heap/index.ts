interface OptionsType {
  type?: string,
  size?: number,
  compareFun?: Function
}

const defaultOtions: OptionsType = {
  // Heap type. minHeap or maxHeap
  type: "minHeap",
  // a function to compare  two value. if first > second return true
  compareFun: (a: number, b: number): boolean => a > b
}


export default class Heap {
  [x: string]: any
  /**
   * @param options see defaultOtions
   */
  constructor(options: OptionsType = {}, data: Array<any> = []) {
    options = { ...defaultOtions, ...options }
    this.options = options
    this.data = [...data]
    this.size = this.data.length
    this.build()
  }
  // Private method to swap two item in array.
  #swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
  #heapify(index: number) {
    const { data, size } = this
    const { type, compareFun } = this.options
    if (index > size) return
    let i = index
    let left = i * 2 + 1
    let right = i * 2 + 2
    // minHeap
    if (type === 'minHeap') {
      if (left < size && compareFun(data[i], data[left])) i = left
      if (right < size && compareFun(data[i], data[right])) i = right
    }
    // maxHeap
    if (type === 'maxHeap') {
      if (left < size && compareFun(data[left], data[i])) i = left
      if (right < size && compareFun(data[right], data[i])) i = right
    }
    if (i === index) return
    this.#swap(i, index)
    return this.#heapify(i)
  }
  build() {
    const len = Math.floor(this.size / 2)
    for (let i = len; i >= 0; i--) {
      // 节点堆化
      this.#heapify(i)
    }
    return this
  }
  insert(value) {
    this.data.push(value)
    this.size++
    this.build()
    return this
  }
  get() {
    if (this.size === 0) return undefined
    return this.data[0]
  }
  delete() {
    if (this.size === 0) return
    this.#swap(this.size - 1, 0)
    this.data.pop()
    this.size -= 1
    this.#heapify(0)
    return this
  }
  // sort后原来的值会打乱
  sort() {
    for (let i = this.size - 1; i >= 0; i--) {
      this.#swap(0, i)
      this.size -= 1
      this.#heapify(0)
    }
    // 恢复 size
    this.size = this.data.length
    return this.data
  }
  allData(){
    return this.data
  }
}

