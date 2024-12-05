export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }
    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) return -1;
        const value = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return value;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return value;
    }
    private getParent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private getLeftChild(idx: number): number {
        return 2 * idx + 1;
    }
    private getRightChild(idx: number): number {
        return 2 * idx + 2;
    }
    private heapifyUp(idx: number): void {
        if (idx === 0) return;
        const parentIdx = this.getParent(idx);
        if (this.data[idx] < this.data[parentIdx]) {
            this.swap(this.data, idx, parentIdx);
            this.heapifyUp(parentIdx);
        }
    }
    private heapifyDown(idx: number): void {
        const leftIdx = this.getLeftChild(idx);
        const rightIdx = this.getRightChild(idx);
        if (idx >= this.length || leftIdx >= this.length) return;

        const left = this.data[leftIdx];
        const right = this.data[rightIdx];
        const value = this.data[idx];

        if (left < right && left < value) {
            this.swap(this.data, idx, leftIdx);
            this.heapifyDown(leftIdx);
        } else if (right < left && right < value) {
            this.swap(this.data, idx, rightIdx);
            this.heapifyDown(rightIdx);
        }
    }
    private swap(arr: number[], idxA: number, idxB: number): void {
        const temp = arr[idxA];
        arr[idxA] = arr[idxB];
        arr[idxB] = temp;
    }
}
