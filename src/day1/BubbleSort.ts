export default function bubble_sort(arr: number[]): void {
    for (let i = 1; i < arr.length; ++i) {
        let swapped = false;
        for (let j = 0; j < arr.length - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) return;
    }
}
