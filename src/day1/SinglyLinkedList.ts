type ListNode<T> = {
    value: T;
    next?: ListNode<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node: ListNode<T> = { value: item, next: undefined };
        if (this.head === undefined) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index out of bounds");
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        }
        const node = { value: item } as ListNode<T>;
        const prev = this.getAt(idx - 1);

        if (prev) {
            node.next = prev.next;
            prev.next = node;
        }
        this.length++;
    }

    append(item: T): void {
        const node = { value: item } as ListNode<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        let prev = undefined;
        for (let i = 0; curr && i < this.length; ++i) {
            prev = curr;
            if (curr.value === item) {
                this.length--;
                // If i is 0 remove head
                if (i === 0) {
                    this.head = this.head?.next;
                    if (!this.head) {
                        this.tail = undefined;
                        return curr.value;
                    }
                }
                // If i is length remove tail
                if (i === this.length) {
                    this.tail = prev;
                    curr.next = undefined;
                    return curr.value;
                }
                return this.removeNode(prev, curr);
            }
            curr = curr.next;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            return undefined;
        }

        if (idx === 0) {
            // Remove head
            const out = this.head?.value;
            this.head = this.head?.next;
            if (!this.head) {
                this.tail = undefined;
            }
            this.length--;

            return out;
        }
        this.length--;

        const prev = this.getAt(idx - 1);
        let curr = undefined;
        if (prev) {
            curr = prev.next;
        }

        if (idx === this.length) {
            // remove tail
            const out = curr?.value;
            this.tail = prev;
            curr = undefined;
            return out;
        }
        if (prev && curr) {
            return this.removeNode(prev, curr);
        }
        return undefined;
    }

    private removeNode(prev: ListNode<T>, curr: ListNode<T>): T {
        prev.next = curr.next;
        curr.next = undefined;
        return curr.value;
    }

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
