export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
function walk(curr: BinaryNode<number> | null, arr: number[]): number[] {
    if (!curr) return arr;
    arr.push(curr.value);
    walk(curr.left, arr);
    walk(curr.right, arr);
    return arr;
}
