import React, {useState} from 'react'
import Input from './Input'
import {hero} from './data/hero'
import Todoitem from './Todoitem'

export default function Todo() {
    const [heros, setHeros] = useState(hero)

    function addTodo(value){
        setHeros(heros.push({title: value}))
        console.log(heros)
    }

  return (
    <div>
    <div className='header'>
        <Input addTodo={addTodo}></Input>
    </div>
    <ul>
        {/*heros.map((item; id) => <Todoitem title={item.title} key={id} ></Todoitem>)*/}
    </ul>
    </div>
  )
}
