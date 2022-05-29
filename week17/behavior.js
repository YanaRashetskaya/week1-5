function checkName() {
    const str = document.getElementById('inputFIO').value;
    const arr = str.trim();
    const ready = arr.replace(/^ +| +$|( ) +/g,"$1");
    const low = ready.toLowerCase();
    const hight = low.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    const divide = hight.split(" ");
    const surname = divide[0];
    const yourname = divide[1];
    const patronymic = divide[2];
    document.getElementById("inputSurname").value = surname;
    document.getElementById("inputName").value = yourname;
    document.getElementById("inputPatronymic").value = patronymic;
}