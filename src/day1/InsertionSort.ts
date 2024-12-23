export default function insertion_sort(arr: number[]): void {
    if (arr.length <= 1) return;
    for (let i = 1; i < arr.length; ++i) {
        for (let j = i; j > 0; --j) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
