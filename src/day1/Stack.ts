type StackNode<T> = {
    value: T;
    next?: StackNode<T>;
};
export default class Stack<T> {
    private head?: StackNode<T>;
    length: number;
    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const newNode: StackNode<T> = { value: item };
        if (!this.head) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    pop(): T | undefined {
        if (!this.head) return undefined;
        this.length--;
        const value = this.head.value;
        if (!this.head.next) {
            this.head = undefined;
            return value;
        }
        this.head = this.head.next;
        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
