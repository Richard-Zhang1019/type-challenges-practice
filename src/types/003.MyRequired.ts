// Required<T>
// 传入类型的属性变为必选

interface Person {
  name: string
  age: number
  address?: string
}

type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}

type ResultType = MyRequired<Person>
type ResultType2 = Required<Person>

export {}
