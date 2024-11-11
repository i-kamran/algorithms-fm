type ListNode<T> = {
    value: T;
    prev?: ListNode<T>;
    next?: ListNode<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const node = { value: item } as ListNode<T>;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new RangeError("Index out of bounds");
        }

        // If inserting at the start, use prepend
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        // If inserting at the end, use append
        if (idx === this.length) {
            this.append(item);
            return;
        }

        // Traverse to the node just before the insertion point
        let current = this.head;
        for (let i = 0; i < idx - 1 && current; i++) {
            current = current.next;
        }

        // Create the new node and insert it
        const node = { value: item } as ListNode<T>;
        node.next = current?.next;
        node.prev = current;

        if (current?.next) {
            current.next.prev = node;
        }
        current!.next = node;

        this.length++;
    }
    append(item: T): void {
        const node = { value: item } as ListNode<T>;
        this.length++;

        // If the list is empty, set head and tail to the new node
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        // Attach the new node to the end of the list
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
