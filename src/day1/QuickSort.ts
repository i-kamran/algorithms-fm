export default function quick_sort(arr: number[]): void {
    if (arr.length <= 1) return;

    function partition(left: number, right: number): number {
        const pivot = arr[Math.floor((left + right) / 2)];
        let i = left;
        let j = right;

        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }

            while (arr[j] > pivot) {
                j--;
            }

            if (i <= j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
                j--;
            }
        }

        return i;
    }

    function sort(left: number, right: number): void {
        const index = partition(left, right);

        if (left < index - 1) {
            sort(left, index - 1);
        }

        if (index < right) {
            sort(index, right);
        }
    }

    sort(0, arr.length - 1);
}
