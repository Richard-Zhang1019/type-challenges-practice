// Record<K, T>
// 遍历传入的类型，返回对象类型, K 为对象的key的类型，T 为对象的value的类型

interface Person {
  name: string
  age: number
  address: string
}

type res = keyof any

// 确保 K 是可以作为key的联合类型
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

type ResultType =  MyRecord<string, Person>
type ResultType2 =  Record<string, Person>

export {}
