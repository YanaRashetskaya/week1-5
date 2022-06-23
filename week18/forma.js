let selector = document.querySelectorAll('input [type="tel"]');

let im = new Inputmask ("+7(999) 999-99-99");

im.mask(selector);

//Проверка для одного поля
let errors = [];
function checkValidity(input) {
    let validity = input.validity;

	if (validity.valueMissing) { 
		errors.push('Поле ' + input.placeholder + ' не заполнено'); 
	}

    if (validity.patternMismatch) { 
		errors.push('Неверный формат заполнения'); 
	}
    
	if (validity.rangeOverflow) { 
		let max = input.max;
		errors.push('Максимальное значение не может быть больше чем ' + max); 
	}
    
	if (validity.rangeUnderflow) { 
		let min = input.min;
		errors.push('Минимальное значение не может быть больше чем ' + min); 
	}
    
	if (validity.tooLong) { 
		errors.push('Значение слишком длинное'); 
	} 

	if (validity.tooShort) { 
		errors.push('Значение слишком короткое'); 
	} 
}

//Проверка для всех полей
function checkAll() {
		//получаем все инпуты
	errors = [];
    let inputs = document.querySelectorAll("input");

		//перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        checkValidity(input);
    }

		//выводим ошибки в div 
    document.querySelectorById('errorsInfo').innerHTML = 
	errors.join('. <br>');
}