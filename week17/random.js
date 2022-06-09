const min = Math.round(-10);
const max = Math.round(9);

document.querySelector('button').onclick = function() {
    const randomNumbers = [];
    
    for (i=0; i<10; i++) {
        randomNumbers.push(getRandomIntInclusive(min, max));
    }
    document.getElementById ('numbers').innerHTML = randomNumbers;

    let maxNumber = Math.max.apply(null, randomNumbers);
    document.getElementById ('maxNumber').innerHTML = maxNumber;

    let minNumber = Math.min.apply(null, randomNumbers);
    document.getElementById ('minNumber').innerHTML = minNumber;

    let sumNumber = 0;
    for(i = 0; i < randomNumbers.length; i++){
        sumNumber += randomNumbers[i];
    }
    document.getElementById ('sumNumber').innerHTML = sumNumber;

    let middleNumber = sumNumber/randomNumbers.length;
    document.getElementById ('middleNumber').innerHTML = middleNumber;

    let multiplicationNumber = 1;
    for (i = 0; i < randomNumbers.length; i++) {
        multiplicationNumber = multiplicationNumber*randomNumbers[i];
    }
    document.getElementById ('multiplicationNumber').innerHTML = multiplicationNumber;
    }




function getRandomIntInclusive(min, max) {
    
    return Math.round(Math.random() * (max - min + 1)) + min;
}


