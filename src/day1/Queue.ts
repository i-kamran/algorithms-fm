export default class Queue<T> {
    public length: number;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode: QueueNode<T> = { value: item, next: undefined };
        
        if (this.tail === undefined) {
            // If queue is empty, set both head and tail to new node
            this.head = this.tail = newNode;
        } else {
            // Add to tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    deque(): T | undefined {
        if (this.head === undefined) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            // If queue is now empty, reset tail
            this.tail = undefined;
        }

        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

type QueueNode<T> = {
    value: T;
    next?: QueueNode<T>;
};
