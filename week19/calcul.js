//const a = prompt("Первое число?");
//const b = prompt("Второе число?");

class Calculator {

    constructor(a, b) {
        this.a = a; 
        this.b = b;  
    }

    static showplus(one, two) 
    {
        let resultSum = one.a + + two.b;
        return  resultSum;
    }
    static showminus(one, two) {
        let resultMinus = one.a - two.b;
        return resultMinus; 
    }
    
    static showtimes(one, two) {
        let resultTimes = one.a * two.b; 
        return resultTimes;
    }
    
    static showdivide(one, two) {
        if (two == 0) {
            alert ('На ноль делить нельзя!');
    }
    else {
        return one.a / two.b; 
    }

    }
};
