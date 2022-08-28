import React, {useState} from 'react'

export default function 
Input({addTodo}) {
    const [value, setValue]= useState('')

    function hendleInputValue(event){
        setValue(event.target.value)
    }

    function hendelClick(){
        addTodo(value)
    }
return (
    <> <input type="text" defaultValue={value} onChange={hendleInputValue}></input>
    <button onClick={hendelClick}>AddTodo</button>
    </>
    
)
}
