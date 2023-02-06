// Exclude<T, K>
// 传入一个联合类型T，从 T 中过滤 K 属性的类型，组成一个新的类型

type Hobby = 'skiing' | 'swimming' | 'sing'

type MyExclude<T, K> = T extends K ? never : T

type ResultType = MyExclude<Hobby, 'sing'>
type ResultType2 = Exclude<Hobby, 'sing'>

export {}
