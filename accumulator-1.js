let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let accumulator = 0;

for(let i = 0; i < arr.length; i++) {
    accumulator = accumulator + arr[i];
}
console.log(accumulator);