export type Typeless<T> = Omit<T, 'type'>

export function typed<T extends { type: string }>(item: Typeless<T>, type: T['type']): T {
    return {...item, type: type} as T
}