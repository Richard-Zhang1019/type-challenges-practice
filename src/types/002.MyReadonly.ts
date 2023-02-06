// Readonly<T>
// 传入类型的属性变为必选

interface Person {
  name: string
  age: number
  address: string
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type ResultType =  MyReadonly<Person>
type ResultType2 =  Readonly<Person>

export {}
