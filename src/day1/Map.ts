export default class Map<T extends string | number, V> {

    get(key: T): V | undefined {
    }

    set(key: T, value: V): void {
    }
    delete(key: T): V | undefined {}

    size(): number {
        return length;
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
