import React from 'react'


const Todo = ({todos, deleteTodo ,markComplete}) =>{

    
    const todoList = todos.length ? (
        
        todos.map(todo =>{
            
            return (
            <div key={todo.id} >
               
               <div className="item">
                   <ul>
                       <li onClick={()=>{markComplete(todo.id)}} >
                            <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>{todo.content}</span> 
                            
                        </li>
                        <i onClick={()=>{deleteTodo(todo.id)}} className="fas fa-trash-alt"></i> 
                         
                   </ul>   
               </div>
                     
                
                     
            </div>
            ) 
        })
    ) : (
        <p>No todo's Left </p>
    )
    

    return(
        <div >
            {todoList}
        </div>
    )
}

export default Todo