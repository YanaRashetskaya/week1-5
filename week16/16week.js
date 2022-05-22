let numbers = [];

function sumInput() {

    while (true) {
    let value = prompt("Введите число", );
    if (value === "" || value === null || !isFinite(value)) break; 
    numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
    sum += number;
    }
    return sum;

    }
alert( sumInput() );
/*

 function BubbleSort(value){
      let n = numbers.length;
      for (let i = 0; i < (n-1); i++){
        for (let j = 0; j < (n-1-i); j++){
            if (numbers[j+1] < numbers[j]){
                let t = numbers[j+1]; 
                numbers[j+1] = numbers[j]; 
                numbers[j] = t; 
            }
          }*/





