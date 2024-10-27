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

    pop(): T | undefined { 
        if (this.length === 0) {
            return undefined;
        }
        
        const node = this.pointer;
        this.pointer = this.pointer?.next;
        this.length--;
        return node?.value;
    }

    peek(): T | undefined { 
        return this.pointer?.value;
    }
}

type StackNode<T> = {
    value: T;
    next?: StackNode<T>;
};

