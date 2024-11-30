export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    private arr: T[];

    constructor(initialCapacity: number = 10) {
        this.length = 0;
        this.capacity = initialCapacity;
        this.arr = new Array(initialCapacity);
    }
    private growArray(newCapacity: number): void {
        const newArr = new Array(newCapacity);
        for (let i = 0; i < this.capacity; ++i) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
        this.capacity = newCapacity;
    }

    prepend(item: T): void {
        // add and then grow
        if (this.capacity === this.length) {
           const newCapacity = this.capacity * 2;
           const newArr = new Array(newCapacity)
            for (let i = 1; i <= this.length; ++i ){
                    newArr[i] = this.arr[i-1]
            }
            newArr[0] = item
            this.arr = newArr
            this.length++
            return
        }
        for (let i = this.length; i > 0; --i) {
            this.arr[i] = this.arr[i - 1];
        }
        this.arr[0] = item
        this.length++;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        if (this.capacity === this.length) {
            this.growArray(this.capacity * 2);
        }
        this.arr[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {
        if (idx >= this.length) return undefined
        return this.arr[idx]
    }
    removeAt(idx: number): T | undefined {}
}

