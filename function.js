const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function func (sum) {
     for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
     }
     return sum
}
console.log(func(0))




let arr_1 = [-1, 2, -2, 2, 3, -3, 4, 5, 6, 7, 8, 9];

function func_1(summa) {
    for(let i = 0; i < arr_1.length; i++) {
        if(arr_1[i] > 0){
            summa += arr_1[i]
        }
    }
    return summa
}
console.log(func_1(0))



const arr_3 = ['html', 'css', 'python', 'github', 'react', 'javaScript', 'fs', 'qr', 'jv', 'qrwr'];

function func_2(string) {
    for(let i = 0; i < arr_3.length; i++) {
        if(arr_3[i].length > 3){
            string.push(arr_3[i])
        }
    }
    return string
}
console.log(func_2([ ]));


const arr_4 = ['a', 'b', 'c', 'y', 'a']

function func_3(result){
    for(let i = 0; i < arr_4.length; i++) {
        if(arr_4[i][0] === 'a'){
            result.push(arr_4[i])
        }
    }
    return result
}
console.log(func_3([ ]))  





const messages = [
    { text: 'hello', deleted: true },
    { text: 'bue', deleted: false },
    { text: 'js is a beauty', deleted: false },
    { text: 'pair programming', deleted: true },
    { text: 'this is my horse', deleted: false },
   ];


function deleteMessages(array) {
    let arr_5 = [ ];
    for(let i = 0; i < array.length; i++) {
        if(array[i].deleted === false ) {
            arr_5.push(array[i])
        }
    }
    return arr_5
  }
  console.log(deleteMessages(messages))
  
  





