import React from 'react'
import { useState } from 'react'
import './Todo.css';

const Todo = () => {

const [todos,setTodos] = useState([])
const [input,setInput] = useState('')

const handleSubmit =()=>{

    setTodos((todos)=>{
      return  todos.concat({
            text : input,
            id :Math.floor(Math.random()*10),
        })
    })
    setInput("")
}

const removeTodo =(id)=> 
        setTodos((todos)=>
        todos.filter((t)=>t.id !==id));


  return (

//     <div>
//       <input type="text" 
//       placeholder='write'
//       value={input}
//       onChange={(e)=>setInput(e.target.value)}
//       />

//       <button onClick={handleSubmit}> Submit</button>

//       <ul>
//         {
//             todos.map(({text,id})=>
//             <li key={id}>

//                 <span>{text}</span>
//                 <button onClick={()=>removeTodo(id)}>X</button>
//             </li>

            
//             )
//         }
//       </ul>



//     </div>
//   )
// }


<div className="todo-container">
      <div className="todo-box">
        <h2 className="todo-title">Task Master</h2>
        
        <div className="input-group">
          <input
            type="text"
            className="todo-input"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="submit-btn" onClick={handleSubmit}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.map(({ text, id }) => (
            <li key={id} className="todo-item">
              <span className="todo-text">{text}</span>
              <button className="remove-btn" onClick={() => removeTodo(id)}>✕</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo
