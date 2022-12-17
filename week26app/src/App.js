import React, {useEffect, useState} from 'react';
import styles from './App.css';



function App() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailDirty, setEmailDirty] = useState('false')
const [passwordDirty, setPasswordDirty] = useState('false')
const [emailError, setEmailError]= useState('Eмейл не может быть пустым')
const [passwordError, setPasswordError]= useState('Пароль не может быть пустым')
const [formValid, setFormValid] = useState('false')

useEffect(()=>{
if(emailError || passwordError){
  setFormValid(false)
} else{
  setFormValid(true)
}
}, [emailError, passwordError])

const emailHandler =(e)=>{
  setEmail(e.target.value)
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!re.test(String(e.target.value).toLocaleLowerCase())){
  setEmailError('Неккоректно введен емейл')
  } else{
  setEmailError("")
  }
}

const passworHandler=(e)=>{
  setPassword(e.target.value)
  if(e.target.value.length < 3 || e.target.value.length > 8){
    setPasswordError('Пароль должен быть длиннеe 3 и меньше 8')
  if (!e.target.value){
    setPasswordError('Пароль не может быть пустым')
  }
}else{
    setPasswordError('')
  }
}


const blurHandler = (e)=>{
  switch(e.target.nsme){
    case 'email':
      setEmailDirty(true)
      break
    case 'passwor':
        setPasswordDirty(true)
        break
  }
}


  return (
    <div className={styles.App}>
    <form className={styles.form}>
      <h1> Регистрация</h1>
      {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
      <input onChange={e=>emailHandler(e)} value={email} onBlur={e=> blurHandler(e)} name='name' type='text' className={styles.field__input} placeholder='Введите Ваш eмейл...'/>
      {(passwordError && passwordDirty ) && <div style={{color:'red'}}>{passwordError}</div>}
      <input  onChange={e=>passworHandler(e)} value={password} className={styles.field__input} onBlur={e=> blurHandler(e)} name='password' type='password' placeholder='Введите Ваш пароль...'/>
      <button disabled={!formValid} className={styles.btn} type='sabmit'>Регистрация</button>
    </form>
    </div>
  );
}

export default App;
