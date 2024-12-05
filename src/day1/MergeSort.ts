export default function merge_sort(arr: number[]): void {
    sort(arr, 0, arr.length - 1);
    return;
}

function merge(arr: number[], lo: number, mid: number, hi: number) {
    const sizeLeft = mid - lo + 1;
    const sizeRight = hi - mid;

    const arrLeft = new Array(sizeLeft);
    const arrRight = new Array(sizeRight);

    for (let i = 0; i <= sizeLeft; ++i) {
        arrLeft[i] = arr[i + lo];
    }
    for (let i = 0; i <= sizeRight; ++i) {
        arrRight[i] = arr[i + mid + 1];
    }

    let pointer = lo;
    let pointerLeft = 0,
        pointerRight = 0;
    while (pointerLeft < sizeLeft && pointerRight < sizeRight) {
        if (arrLeft[pointerLeft] < arrRight[pointerRight]) {
            arr[pointer] = arrLeft[pointerLeft++];
        } else {
            arr[pointer] = arrRight[pointerRight++];
        }
        pointer++;
    }
    while (pointerLeft < sizeLeft) {
        arr[pointer] = arrLeft[pointerLeft++];
        pointer++;
    }
    while (pointerRight < sizeRight) {
        arr[pointer] = arrRight[pointerRight++];
        pointer++;
    }
}
function sort(arr: number[], lo: number, hi: number) {
    if (lo >= hi) return;
    const mid = Math.floor(lo + (hi - lo) / 2);

    sort(arr, lo, mid);
    sort(arr, mid + 1, hi);
    merge(arr, lo, mid, hi);
}
