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
        this.length = 0
        this.head = this.tail = undefined
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

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}
