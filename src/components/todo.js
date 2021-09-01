import React from 'react'
import '../App.css'

const Todos = ( props ) => {

    return (
        <div style={{ marginTop : "30px"}}>
            {props.todoList.map((todo) => {
                return <div id="todoItem" className = "todoItem">{todo}</div>
            })}
        </div>
    )
}
export default Todos;