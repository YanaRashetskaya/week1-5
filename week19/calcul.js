
class Calculator {


    static showplus(one, two) 
    {
        return  one + + two;
    }

    static showminus(one, two) {

        return one - two; 
    }
    
    static showtimes(one, two) {
        
        return one * two;
    }
    
    static showdivide(one, two) {
        if (two == 0) {
            alert ('На ноль делить нельзя!');
    }
    else {
        return one / two; 
    }

    }
};

const fieldOne = document.getElementById("firstInput");
const fieldTwo = document.getElementById("secondInput");
const plusButton = document.getElementById("plusBtn");
const minusButton = document.getElementById("minusBtn");
const timesButton = document.getElementById("timesBtn");
const divideButton = document.getElementById("divideBtn");

function getValues() {
	return [fieldOne.value, fieldTwo.value];
};

function showResult(result) {
	alert(result);
};


const values = getValues();

plusButton.addEventListener("click", () => {
	
	const resultPlus = Calculator.showplus(values[0], values[1])
	showResult(resultPlus)
});

minusButton.addEventListener("click", () => {

	const resultMinus = Calculator.showminus(values[0], values[1])
	showResult(resultMinus)
});

timesButton.addEventListener("click", () => {
	
	const resultTimes = Calculator.showtimes(values[0], values[1])
	showResult(resultTimes)
});

divideButton.addEventListener("click", () => {
	
	const resultDivide = Calculator.showdivide(values[0], values[1])
	showResult(resultDivide)
});