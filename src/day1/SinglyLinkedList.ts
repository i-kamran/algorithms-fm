export default class SinglyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>
    constructor() {
        this.head = this.tail = undefined
        this.lenght = 0
    }

    prepend(item: T): void { }
    insertAt(item: T, idx: number): void { }
    append(item: T): void { }
    remove(item: T): T | undefined { }
    get(idx: number): T | undefined { }
    removeAt(idx: number): T | undefined { }
}

type ListNode<T> = {
    value: <T>,
    next?: ListNode<T>
}
