// ReturnType<T>
// 传入一个函数类型，返回函数的返回值类型

type FunType = (a: string, b: string) => string

function foo() {
  return '123'
}

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never 

type ResultType = MyReturnType<FunType>
type ResultType2 = MyReturnType<typeof foo>
type ResultType3 = ReturnType<typeof foo>

export {}
