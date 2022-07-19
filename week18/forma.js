const selector = document.querySelectorAll('[type="tel"]');

const mask = new Inputmask ("+7(999) 999-99-99");

mask.mask(selector);

//Проверка для одного поля
let errors = [];
function checkValidity(input) {
    const validity = input.validity;

	if (validity.valueMissing) { 
		errors.push('Поле ' + input.placeholder + ' не заполнено'); 
	}

    if (validity.patternMismatch) { 
		errors.push('Неверный формат заполнения'); 
	}
    
	if (validity.rangeOverflow) { 
		const max = input.max;
		errors.push('Максимальное значение не может быть больше чем ' + max); 
	}
    
	if (validity.rangeUnderflow) { 
		const min = input.min;
		errors.push('Минимальное значение не может быть больше чем ' + min); 
	}
    
	if (validity.tooLong) { 
		errors.push('Значение слишком длинное, придумайте другое значение'); 
	} 

	if (validity.tooShort) { 
		errors.push('Значение слишком короткое, придумайте другое значение'); 
	} 
}

//Проверка для всех полей
function checkAll(e) { 
	e.preventDefault()
		//получаем все инпуты
	errors = [];
    let inputs = document.querySelectorAll("input");

		//перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        checkValidity(input);
    }

		//выводим ошибки в div 
	const errorDiv = document.getElementById('errorsInfo');
	errorDiv.innerHTML = errors.join('. \n');
}


document.querySelector("#button").addEventListener("click", checkAll);