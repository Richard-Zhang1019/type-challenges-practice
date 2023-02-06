// Omit<T, K>
// 和Pick相反
// 从 T 中过滤 K 属性的类型，组成一个新的类型

interface Person {
  name: string
  age: number
  address?: string
}

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

type ResultType = MyOmit<Person, 'name' | 'age'>
type ResultType2 = Omit<Person, 'name' | 'age'>

export {}
