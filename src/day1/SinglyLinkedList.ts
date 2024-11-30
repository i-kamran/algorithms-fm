type ListNode<T> = {
    value: T;
    next?: ListNode<T>;
};
export default class SinglyLinkedList<T> {
    private head?: ListNode<T>;
    private tail?: ListNode<T>;
    public length: number;
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode: ListNode<T> = { value: item };
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        }
        const prevNode = this.getNodeAt(idx - 1);
        if (!prevNode) return;
        const newNode: ListNode<T> = { value: item };
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
    }

    append(item: T): void {
        const newNode: ListNode<T> = { value: item };
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        if (!this.head) return undefined;

        if (this.head.value === item) {
            const value = this.head.value;
            this.length--;
            if (this.head === this.tail) {
                this.head = this.tail = undefined;
                return value;
            }
            this.head = this.head.next;
            return value;
        }
        let curr: ListNode<T> | undefined = this.head;
        let prev = undefined;
        while (curr) {
            if (curr.value === item) {
                if (prev) prev.next = curr.next;
                this.length--;
                return curr.value;
            }
            prev = curr;
            curr = curr.next;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        return this.getNodeAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx === 0) {
            const value = this.head?.value;
            this.head = this.head?.next;
            if (!this.head) this.tail = undefined;
            this.length--;
            return value;
        }
        const prevNode = this.getNodeAt(idx - 1);
        if (!prevNode || !prevNode.next) return undefined;

        this.length--;
        const value = prevNode.next.value;

        if (prevNode.next === this.tail) {
            prevNode.next = undefined;
            this.tail = prevNode;
            return value;
        }
        prevNode.next = prevNode.next.next;
        return value;
    }

    private getNodeAt(idx: number): ListNode<T> | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        let curr = this.head;

        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        return curr;
    }
}
