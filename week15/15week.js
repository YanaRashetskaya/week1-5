/*Задание 3*/
function background()
{
  if (document.getElementById ("color").value == "first")
  document.getElementById ("background").style.backgroundColor = 'white';
  if (document.getElementById ("color").value == "second")
  document.getElementById ("background").style.backgroundColor = "blue";
  if (document.getElementById ("color").value == "third")
  document.getElementById ("background").style.backgroundColor = "red";
  if (document.getElementById ("color").value == "fourth")
  document.getElementById ("background").style.backgroundColor = "green";
  if (document.getElementById ("color").value == "fifth")
  document.getElementById ("background").style.backgroundColor = "yellow";
}
/*Задание 2*/
function check()
    {
        let name = document.getElementById ("inputName");
        let name2 = document.getElementById ("inputName2");
        let login = document.getElementById ("inputLogin");
        let password1 = document.getElementById ("inputPassword1");
        let password2 = document.getElementById ("inputPassword2");
        let  phone = document.getElementById ("inputPhone");
        document.getElementById ('errorName').innerHTML = '';
        document.getElementById ('errorName2').innerHTML = '';
        document.getElementById ('errorLogin').innerHTML = '';
        document.getElementById ('errorPassword1').innerHTML = '';
        document.getElementById ('errorPassword2').innerHTML = '';
        document.getElementById ('errorPhone').innerHTML = '';
        if (name.value == '') {
          document.getElementById ('errorName').innerHTML+= "Пожалуйста, укажите имя<br>";
        }
        if (name2.value == '') {
          document.getElementById ('errorName2').innerHTML+= "Пожалуйста, укажите фамилию<br>";
        }
        if (login.value == '') {
          document.getElementById ('errorLogin').innerHTML+= "Необходимо выбрать логин<br>";
        }
        if (password1.value == '') {
          document.getElementById ('errorPassword1').innerHTML+= "Необходимо выбрать пароль<br>";
        } else if (password1.value.length <8) {
          document.getElementById ('errorPassword1').innerHTML+= "Ваш пароль слишком короткий<br>";
        }
        if (password2.value == '') {
          document.getElementById ('errorPassword2').innerHTML+= "Необходимо повторить пароль<br>";
        } else if (password2.value != password1) {
          document.getElementById ('errorPassword2').innerHTML+= "Пароль не совпадает<br>";
        }
        if (phone.value == '') {
          document.getElementById ('errorPhone').innerHTML+= "Пожалуйста, укажите номер телефона<br>";
        }
        
        
    }