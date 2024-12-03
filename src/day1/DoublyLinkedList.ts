type DLLNode<T> = {
    value: T;
    next?: DLLNode<T>;
    prev?: DLLNode<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: DLLNode<T>;
    private tail?: DLLNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }
    prepend(item: T): void {
        const newNode: DLLNode<T> = { value: item };
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) return;
        const idxNode = this.getNodeAt(idx);
        if (!idxNode || !idxNode.prev) return;
        if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        }
        const newNode: DLLNode<T> = { value: item };
        newNode.next = idxNode;
        newNode.prev = idxNode.prev;
        idxNode.prev.next = newNode;
        idxNode.prev = newNode;
        this.length++;
    }
    append(item: T): void {
        const newNode: DLLNode<T> = { value: item };
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        while (curr) {
            if (curr.value === item) break;
            curr = curr.next;
        }
        if (!curr) return undefined;
        return (this.removeNode(curr))
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        return this.getNodeAt(idx)?.value;
    }

    show(): void {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        const idxNode = this.getNodeAt(idx);
        if (!idxNode) return undefined;

        return (this.removeNode(idxNode))
    }

    private getNodeAt(idx: number): DLLNode<T> | undefined {
        let curr = this.head;
        for (let i = 0; i < idx; ++i) {
            if (!curr) return undefined;
            curr = curr.next;
        }
        return curr;
    }

    private removeNode(node: DLLNode<T>):T{
        this.length--;
        const value = node.value;
        if (this.length === 0) {
            this.head = this.tail = undefined;
            node.prev = node.next = undefined;
            return value;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node === this.head) {
            this.head = node.next;
        } else if (node === this.tail) {
            this.tail = node.prev;
        }
        node.prev = node.next = undefined;
        return value;
    }
}
