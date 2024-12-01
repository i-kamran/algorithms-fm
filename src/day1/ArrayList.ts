export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    private arr: T[];

    constructor(initialCapacity: number = 2) {
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
            const newArr = new Array(newCapacity);
            for (let i = 1; i <= this.length; ++i) {
                newArr[i] = this.arr[i - 1];
            }
            newArr[0] = item;
            this.arr = newArr;
            this.length++;
            return;
        }
        for (let i = this.length; i > 0; --i) {
            this.arr[i] = this.arr[i - 1];
        }
        this.arr[0] = item;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error(
                `Index ${idx} is out of bounds. Valid range is 0 to ${this.length}.`,
            );
        }
        if (this.length === this.capacity) {
            this.growArray(this.capacity * 2);
        }
        for (let i = this.length; i > idx; --i) {
            this.arr[i - 1] = this.arr[i];
        }
        this.arr[idx] = item;
        this.length++;
    }
    append(item: T): void {
        if (this.capacity === this.length) {
            this.growArray(this.capacity * 2);
        }
        this.arr[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        for (let i = 0; i < this.length; ++i) {
            if (this.arr[i] === item) {
                const value = this.arr[i];
                for (let j = i; j < this.length - i; ++j) {
                    this.arr[j] = this.arr[j + 1];
                }
                this.length--;
                return value;
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx >= this.length) return undefined;
        return this.arr[idx];
    }
    show(): void {
        if (!Array.isArray(this.arr)) {
            console.error("Error: this.arr is not defined or is not an array.");
            return;
        }

        this.arr.forEach((element, index) => {
            console.log(`Index ${index}: ${element}`);
        });
    }
    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) {
            return undefined;
        }
        const value = this.arr[idx];
        for (let i = idx; i < this.length; ++i) {
            this.arr[i] = this.arr[i + 1];
        }
        this.length--;
        return value;
    }
}
