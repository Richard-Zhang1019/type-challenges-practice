// Partial<T>
// 传入类型的属性变为可选

interface Person {
  name: string
  age: number
  address: string
}

type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

type ResultType =  MyPartial<Person>
type ResultType2 =  Partial<Person>

export {}
