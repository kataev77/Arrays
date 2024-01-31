const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let accumulatorOdd = [];

for(i = 0; i < 10; i++) {
    if(arr[i] % 2 === 1) {
        accumulatorOdd.push(arr[i])
    }
}
console.log(accumulatorOdd)