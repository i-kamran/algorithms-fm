type ListNode<T extends unknown> = {
    value: T;
    next?: ListNode<T>;
};
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>
    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    prepend(item: T): void {
        const node: ListNode<T> = { value: item, next: undefined };
        if (this.head === undefined) {
            this.head = this.tail = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
    }
    append(item: T): void { }
    remove(item: T): T | undefined { }
    get(idx: number): T | undefined { 
      if (idx > this.length) {
            return undefined;
        }
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined { }
    private getAt(idx: number): ListNode<T> | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let curr = this.head;

        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        return curr;
    }
}
