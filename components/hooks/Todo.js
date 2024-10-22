import React, { useState } from 'react'
import { ACTIONS } from './UseReducer'

export default function Todo({todo, dispatch}) {
  const [name, setName] = useState('')
  return (
    <div className={`each_todo`}>
        <input type='checkbox' onChange={(e) => dispatch({type: ACTIONS.TOG, payload : {id: todo.id}})}/>
        {
        todo.complete ? 
        <strike className='todo_text'>{todo.name}</strike>
        : 
        todo?.edit ? <input type='text' onChange={(e) => setName(e.target.value)} className='todo_text' value={name}/>: <span className='todo_text'>{todo.name}</span>
        }
        <button className='btn_edit' onClick={() => {
          if(!todo?.edit){
            setName(todo?.name)
            dispatch({type: ACTIONS.EDIT, payload : {id: todo.id}})
          } else {
            console.log("else");
            dispatch({ type: ACTIONS.SAVE, payload: { id:todo?.id, name: name } })
          }
          }}>{todo?.edit ? "Save": "Edit"}</button>
        <button className='btn_delete' onClick={() => dispatch({type: ACTIONS.DEL, payload : {id: todo.id}})}>Delete</button>
    </div>
  )
}
