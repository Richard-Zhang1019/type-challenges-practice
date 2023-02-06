// NonNullable<T>
// 传入一个联合类型T，从 T 中过滤 null 和 undefined 属性的类型，组成一个新的类型

type Hobby = 'skiing' | 'swimming' | 'sing' | null | undefined

type MyNonNullable<T> = T extends null | undefined ? never : T
type MyNonNullable2<T> = T & {}

type ResultType = MyNonNullable<Hobby>
type ResultType2 = MyNonNullable2<Hobby>
type ResultType3 = NonNullable<Hobby>

export {}
