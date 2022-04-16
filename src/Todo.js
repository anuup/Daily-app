import React,{useState} from 'react'


function Todo() {
    const[todos,setTodos]=useState([]);
    const[todo,setTodo]=useState([]);
  return (
    <div className='todo-input'>
        <h1>Daily</h1>
        <input className='inp'  value={todo} type="text" onChange={(e)=>setTodo(e.target.value)} placeholder='Type your Todo' />
        <button onClick={()=>{setTodos([...todo,todos])}}>Add</button>
        {
            todos.map((value)=>{
                <p>{value}</p>
            })
        }
    </div>
    
  )
}

// onClick={()=>{setTodos([...todos,todo])}}
export default Todo