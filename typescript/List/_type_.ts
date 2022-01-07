export interface ListType {
  type?: string,
  circle?: false,
  storeType?: string,
}

export interface NodeType<T>{
   prev?:T | null
   value:T
   next?:T | null
}

