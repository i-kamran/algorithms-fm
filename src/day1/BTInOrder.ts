export default function in_order_search(head: BinaryNode<number>): number[] {
   return  walk(head, [])
}
function walk(curr: BinaryNode<number> | null, arr: number[]): number[]{
    if (!curr) return arr
    walk(curr.left, arr)
    arr.push(curr.value)
    walk(curr.right, arr)
    return arr
} 
