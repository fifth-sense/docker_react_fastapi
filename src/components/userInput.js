import React, { useState } from 'react'
import '../App.css'
import moment from 'moment'
import Todos from './todo';

const UserInput = () => {

    const [text, setText] = useState('');
    const [todo, setTodoList] = useState([]);
    // const [err, setErr] = useState('')

    const onInputChange = (event) => {
        setText(event.target.value)    
    }
    var handleAdd = async () => {
       
            let date = moment().format('YYYY-MM-DD')
            let url = "http://127.0.0.1:8000/todo"
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors',
                body: JSON.stringify ({
                    title: text
                })
            };
            const response = await fetch(url, requestOptions,);
            const data = await response.json();
           if(data){
               setTodoList((items) => [...items,text] )
               setText("")
           } 
    }

    return (
        <>
            <h4 id="subtitile" className="subHeadingStyle2">Add new To Do</h4>
            <input type="text" placeholder="write your todo here!" name={text} value={text} className="userInputStyle" onChange={onInputChange} />
           {/* {Boolean(text.length) ||<span className="emptyValue">{err}</span> } */}
            <div className="addButtonView">
                <button id="add" onClick={handleAdd} className = "addButton">ADD</button>
            </div>
            {<Todos todoList={todo} />}
        </>
    )
}

export default UserInput;