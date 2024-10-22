import React, { useReducer, useState } from 'react'
import Todo from './Todo'

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOG: "toggle",
  EDIT: "edit",
  SAVE: "save",
  DEL: "delete"
}
export default function UseReducer() {

  // const reducer = (state, action) => {
  //   switch (action.type){
  //     case "inc": return {count: state.count+1}
  //     case "dec": return {count: state.count-1}
  //       default: return state
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, { count: 0 })

  // const increment = () => {
  //   dispatch({type: "inc"})
  // }

  // const decrement = () => {
  //   dispatch({type: "dec"})
  // }

  const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false }
  }

  const reducer = (todos, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO: {
        return [...todos, newTodo(action.payload.name)]
      }
      case ACTIONS.SAVE: {
        return todos.map((each) => {
          if (each?.id === action.payload.id) {
            return { name: action?.payload?.name }
          }
          return each
        })
      }
      case ACTIONS.TOG: {
        return todos.map((each) => {
          if (each?.id === action.payload.id) {
            return { ...each, complete: !each?.complete }
          }
          return each
        })
      }
      case ACTIONS.DEL: {
        return todos.filter((each) => each?.id !== action.payload.id)
      }
      case ACTIONS.EDIT: {
        return todos.map((each) => {
          if (each?.id === action.payload.id) {
            return { ...each, edit: !each?.edit }
          }
          return each
        })
      }
    }
  }

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }
  console.log(todos);
  return (
    <div className='todos'>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} value={name} />
      </form>
      <section className='todo_section'>
        {todos.map((each) => {
          return <Todo key={each?.id} todo={each} dispatch={dispatch} />
        })}
      </section>
      <style>{`
      .todos{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
      }
      .todo_section{
        display: flex;
        flex-direction: column;
        width: 500px;
      }
      .each_todo{
        display: flex;
        align-items: center;
        gap: 20px;
        width: 100%;
        justify-content: space-between;
        margin: 10px 0 0 0;
      }
      .todo_text{
        color: rgb(255, 255, 255);
        width: 100%;
      }
      `}</style>
      {/* <button onClick={() => decrement()}>-</button>
      <span>{state.count}</span>
      <button onClick={() => increment()}>+</button> */}
    </div>
  )
}
