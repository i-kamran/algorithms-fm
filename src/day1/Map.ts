export default class Map<T extends string | number, V> {
    private length: number;
    private capacity: number;
    private arr: T[];
    constructor(capacity: number = 2) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(capacity);
    }

    get(key: T): V | undefined {
        const hash = this.getHash(key);
    }

    set(key: T, value: V): void {
        const entry = this.getEntry(key);
    }
    delete(key: T): V | undefined {}

    size(): number {
        return length;
    }

    private getEntry(key: T): Entry {}
    private getHash(key: T): number {
        return 1;
    }
}
class Entry<T extends string | number, V> {
    private key: T;
    private value: V;
    constructor(key: T, value: V) {
        this.key = key;
        this.value = value;
    }
}
