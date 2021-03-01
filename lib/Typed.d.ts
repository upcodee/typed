export declare type Typeless<T> = Omit<T, 'type'>;
export declare function typed<T extends {
    type: string;
}>(item: Typeless<T>, type: T['type']): T;
