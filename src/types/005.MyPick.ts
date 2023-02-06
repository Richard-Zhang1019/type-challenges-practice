// Pick<T, K>
// 从 T 中选取 K 属性的类型，组成一个新的类型

interface Person {
  name: string
  age: number
  address?: string
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type ResultType = MyPick<Person, 'name' | 'age'>
type ResultType2 = Pick<Person, 'name' | 'age'>

export {}
