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
        if (this.capacity === this.length) {
            this.growArray(this.capacity * 2);
        }
        
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}

