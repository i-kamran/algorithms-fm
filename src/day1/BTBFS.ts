export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = new Queue<BinaryNode<number>>();
    queue.enqueue(head);
    return walk(queue, needle);
}
function walk(queue: Queue<BinaryNode<number>>, needle: number): boolean {
    const curr = queue.deque();
    if (!curr) return false;
    if (curr.value === needle) return true
    if (curr.left) queue.enqueue(curr.left)
    if (curr.right) queue.enqueue(curr.right)
    return walk(queue, needle)
}

class Queue<T> {
    length: number;
    head?: QueueNode<T>;
    tail?: QueueNode<T>;
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }
    enqueue(item: T): void {
        const newNode: QueueNode<T> = { value: item };
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    deque(): T | undefined {
        if (!this.head) return undefined;
        const value = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = undefined;
        }
        this.length--;
        return value;
    }
}
type QueueNode<T> = {
    value: T;
    next?: QueueNode<T>;
};
