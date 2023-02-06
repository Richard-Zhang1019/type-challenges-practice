// Extract<T, K>
// 传入一个联合类型T，从 T 中提取 K 属性的类型，组成一个新的类型

type Hobby = 'skiing' | 'swimming' | 'sing'

type MyExtract<T, K> = T extends K ? T : never

type ResultType = MyExtract<Hobby, 'sing'>
type ResultType2 = Extract<Hobby, 'sing'>

export {}
