type QueueNode<T> = {
    value: T;
    next?: QueueNode<T>;
};
export default class Queue<T> {
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;
    public length: number;
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const newNode: QueueNode<T> = { value: item };
        this.length++;
        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode
    }

    deque(): T | undefined {
        if (!this.head) return undefined;
        const value = this.head.value;
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = undefined;
            return value;
        }
        this.head = this.head.next
        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
