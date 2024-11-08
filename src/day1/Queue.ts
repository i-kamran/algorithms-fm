export default class Queue<T> {
    public length: number;
    private head?: QueueNode<T>;
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode: QeueuNode<T> = { value: item, next: undefined };
        if (this.head == undefined) {
            this.head = newNode;
        }
        else {
            newNode.prev = this.head
            this.head = newNode
        }
        this.length++;
    }
    deque(): T | undefined {}
    peek(): T | undefined {}
}
type QueueNode<T> = {
    value: T;
    prev?: QueueNode<T>;
};

