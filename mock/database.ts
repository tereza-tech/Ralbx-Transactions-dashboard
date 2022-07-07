export interface Table {

    name: string;
    'delete'(key: string): Promise<boolean>;
    keys(): Promise<string[]>;
    read(key: string): Promise<Object>;
    read<T>(key: string): Promise<T>;
    write(key: string, value: Object): Promise<void>;
}


export interface Database {

    'delete'(table: string): Promise<boolean>;
    list(): Promise<string[]>;
    open(table: string, cacheQueryOptions?: CacheQueryOptions): Promise<Table>;
}

export class NotFound {
    constructor(public table: string, public key: string) { }
}