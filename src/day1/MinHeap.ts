export default class MinHeap {
    public length: number;
    private capacity: number;
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
}
