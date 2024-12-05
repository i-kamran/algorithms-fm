export default function quick_sort(arr: number[]): void {
    sort(arr, 0, arr.length - 1)

}
function partition(arr: number[], lo: number, hi: number): number{
    const mid = Math.floor((lo + (hi - lo) / 2))
    swap(arr, mid, hi)
    const pivot = arr[hi]
    let pointer = lo
    for (let i = lo; i < hi; ++i){
       if (arr[i] <= pivot) {
            swap(arr, i, pointer)
            pointer++;
        }
    }
    swap(arr, pointer,hi )
    return pointer
}

function sort(arr: number[], lo: number, hi: number): void{
    if (lo >= hi) return
    const pivotIdx = partition(arr, lo, hi)
    
    sort(arr, lo, pivotIdx - 1)
    sort(arr, pivotIdx + 1, hi)

     
}
function swap(arr: number[], idxA: number, idxB: number): void{
    const temp = arr[idxA]
    arr[idxA] = arr[idxB]
    arr[idxB] = temp
}
