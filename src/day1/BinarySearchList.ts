export default function bs_list(haystack: number[], needle: number): boolean {
    // Use the first element of the array as low and the last element as high.
    // Use high as exclusive and low as inclusive.
    let lo = 0;
    let hi = haystack.length;
    while (lo < hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        if (haystack[mid] === needle) return true;
        else if (needle > haystack[mid]) {
            lo = mid + 1;
            continue;
        }
        hi = mid;
    }
    return false;
}
