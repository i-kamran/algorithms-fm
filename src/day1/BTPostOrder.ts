export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}
function walk(curr: BinaryNode<number> | null, arr: number[]): number[]{
    if (!curr) return arr
    walk(curr.left, arr)
    walk(curr.right, arr)
    arr.push(curr.value)
    return arr
}
