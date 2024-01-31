const arr = ['Khamzat', 'Rakhim','AAA', 'KHasan', 'aset', 'Murad', 'Rasul', 'Mansur', 'Zelim', 'Ibrem', 'aisha', 'Ismail', 'Kit'];
let  accumulator = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i][0] === 'a') {
        accumulator.push(arr[i])
    }
}
console.log(accumulator)


