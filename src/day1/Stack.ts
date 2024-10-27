export default class Stack<T> {
    public length: number;
    private pointer?: StackNode<T>;

    constructor() {
        this.length = 0;
        this.pointer = undefined;
    }

    push(item: T): void {
        const node: StackNode<T> = { value: item, next: this.pointer };
        this.pointer = node;
        this.length++;
    }

    pop(): T | undefined { }

    peek(): T | undefined { }
}

type StackNode<T> = {
    value: T;
    next?: StackNode<T>;
};
