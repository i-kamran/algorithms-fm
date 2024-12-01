export default class RingBuffer<T> {
    public length: number;
    private capacity: number;
    private arr: T[];

    constructor(initialCapacity: number = 5) {
        this.arr = new Array(initialCapacity);
        this.capacity = initialCapacity;
        this.length = 0;
    }
    private growArray(newCapacity: number) {
        const newArr = new Array(newCapacity);
        for (let i = this.capacity; i > 0; --i) {
            newArr[i] = this.arr[i - 1];
        }
        this.arr = newArr;
    }

    push(item: T): void {
        if (this.length === this.capacity) {
            this.growArray(this.capacity * 2);
        }
        this.arr[this.length] = item;
        this.length++;
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        return this.arr[idx];
    }
    pop(): T | undefined {
        if (this.length === 0){
            return undefined 
        }
        this.length--;
        return this.arr[this.length]
    }
}
