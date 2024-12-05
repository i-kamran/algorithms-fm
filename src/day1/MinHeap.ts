export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }
    insert(value: number): void {}
    delete(): number {}
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
        if (this.data[idx] > this.data[parentIdx]) {
            this.swap(this.data, idx, parentIdx);
            this.heapifyUp(parentIdx);
        }
    }
    private heapifyDown(idx: number): void {
        const leftIdx = this.getLeftChild(idx);
        const rightIdx = this.getRightChild(idx);
        if (idx >= this.length || leftIdx >= this.length) return;

        const minChild = Math.min(this.data[leftIdx], this.data[rightIdx]);
        if (this.data[idx] > minChild) {
            if (this.data[idx] > this.data[leftIdx]) {
                this.swap(this.data, idx, leftIdx);
                this.heapifyDown(leftIdx);
            }
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
