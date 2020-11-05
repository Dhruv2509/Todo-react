import React from 'react'

const CompletedTodo = ({todos, deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map(complete =>{
            return(
                <div key={complete.id}>
                {/* <input onClick={()=>{deleteTodo(todo.id)}} type="checkbox"/> */}
                <span > {complete.content} </span>
                
            </div>
            )
        })
    ) : (
        <p>No tasks completed</p>
    )
    return(
        <div>
            {todoList}
        </div>
    )
}

export default CompletedTodo