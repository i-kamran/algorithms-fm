export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle);
}
function walk(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) return false;
    if (curr.value === needle) return true;

    return walk(curr.left, needle) || walk(curr.right, needle);
}

