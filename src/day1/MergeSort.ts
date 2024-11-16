export default function merge_sort(arr: number[]): void {
    if (arr.length <= 1) return;

    // Split array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    merge_sort(left);
    merge_sort(right);

    // Merge the sorted halves
    merge(arr, left, right);
}

function merge(arr: number[], left: number[], right: number[]): void {
    let i = 0;  // Index for left array
    let j = 0;  // Index for right array
    let k = 0;  // Index for merged array

    // Compare and merge elements from left and right arrays
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements from left array if any
    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    // Copy remaining elements from right array if any
    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
}
