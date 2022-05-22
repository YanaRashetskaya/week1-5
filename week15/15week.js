/*Задание 3*/
let color = document.getElementById ("color");
function background()
{
  if ( color.value == "first")
  document.getElementById ("background").style.backgroundColor = 'white';
  if (color.value == "second")
  document.getElementById ("background").style.backgroundColor = "blue";
  if (color.value == "third")
  document.getElementById ("background").style.backgroundColor = "red";
  if (color.value == "fourth")
  document.getElementById ("background").style.backgroundColor = "green";
  if (color.value == "fifth")
  document.getElementById ("background").style.backgroundColor = "yellow";
}
/*Задание 2*/
   
    const name1 = document.getElementById ("inputName");
    const name2 = document.getElementById ("inputName2");
    const login = document.getElementById ("inputLogin");
    const password1 = document.getElementById ("inputPassword1");
    const password2 = document.getElementById ("inputPassword2");
    const  phone = document.getElementById ("inputPhone");
    let isFormValid = true;

    function check()
    {
        document.getElementById ('errorName').innerHTML = '';
        document.getElementById ('errorName2').innerHTML = '';
        document.getElementById ('errorLogin').innerHTML = '';
        document.getElementById ('errorPassword1').innerHTML = '';
        document.getElementById ('errorPassword2').innerHTML = '';
        document.getElementById ('errorPhone').innerHTML = '';
        if (name1.value == '') {
          document.getElementById ('errorName').innerHTML+= "Пожалуйста, укажите имя<br>";
          isFormValid = false;
        }
        if (name2.value == '') {
          document.getElementById ('errorName2').innerHTML+= "Пожалуйста, укажите фамилию<br>";
          isFormValid = false;
        }
        if (login.value == '') {
          document.getElementById ('errorLogin').innerHTML+= "Необходимо выбрать логин<br>";
          isFormValid = false;
        }
        if (password1.value == '') {
          document.getElementById ('errorPassword1').innerHTML+= "Необходимо выбрать пароль<br>";
          isFormValid = false;
        } else if (password1.value.length <8) {
          document.getElementById ('errorPassword1').innerHTML+= "Ваш пароль слишком короткий<br>";
          isFormValid = false;
        }
        if (password2.value == '') {
          document.getElementById ('errorPassword2').innerHTML+= "Необходимо повторить пароль<br>";
          isFormValid = false;
        } /*else if (password2.value != password1) {
          document.getElementById ('errorPassword2').innerHTML+= "Пароль не совпадает<br>";
          isFormValid = false;  не получилось сравнить пароли, при одинаковых поролях все равно возвращает ошибку 
        }*/
        if (phone.value == '') {
          document.getElementById ('errorPhone').innerHTML+= "Пожалуйста, укажите номер телефона<br>";
          isFormValid = false;
        }
        return isFormValid;
    }

    function nameCheck() {
      if (isFormValid == true) {
      alert(`Добро пожаловать, ${name1.value} ${name2.value}!`);
      }
    }
    button.addEventListener("click", check);
    button.addEventListener("click", nameCheck);
