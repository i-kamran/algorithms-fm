// import ArrayList from "./day1/ArrayList";
// const arrList = new ArrayList<number>();
// arrList.append(5);
// arrList.append(7);
// arrList.append(9);
// console.log(list)
// console.log(arrList.length);
// console.log(arrList.get(1)); // result 9;
// console.log(arrList.removeAt(1)); // result 7;
// console.log(arrList.length); // result 2;
//
// arrList.append(11);
// console.log(arrList.removeAt(1)); // result 9;
// console.log(arrList.remove(9)); // result undefined);
// console.log(arrList.removeAt(0)); // result 5;
// console.log(arrList.removeAt(0)); // result 1);
// console.log(arrList.length); // result 0;
// arrList.prepend(5);
// arrList.prepend(7);
// arrList.prepend(9);
// console.log(arrList.remove(9)); // result 9;
// console.log("Here")
// console.log(arrList.get(2)); // result 5;
// console.log(arrList.get(0)); // result 9;
// console.log(arrList.length); // result 2;
// console.log(arrList.get(0)); // result 7;
// import solve from "./day1/MazeSolver";
//
// const maze = [
//     "xxxxxxxxxx x",
//     "x        x x",
//     "x        x x",
//     "x xxxxxxxx x",
//     "x          x",
//     "x xxxxxxxxxx",
// ];
// const result = solve(maze, "x");
// const arr = [6, 1, 5];
// arr.forEach((element) => console.log(element));
// import insertion_sort from "./day1/InsertionSort";
// console.log("<<<<<<<<<<<<>>>>>>>>>>>>")
// insertion_sort(arr);
// arr.forEach((element) => console.log(element));

import List from "@code/DoublyLinkedList.1";
const list = new List<number>();
list.append(5);
list.append(7);
list.append(9);
console.log(list.get(2)) // 9
console.log(list.removeAt(1)) // 7
console.log(list.length) // 2
list.append(11)
console.log("Before")
console.log(list.removeAt(1)); // result 9;
console.log("After")
console.log(list.remove(9)); // result undefined);
console.log(list.removeAt(0)); // result 5;
console.log(list.removeAt(0)); // result 1);
console.log(list.length); // result 0;
