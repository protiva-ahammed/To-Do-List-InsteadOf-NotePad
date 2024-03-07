
import { Footer } from './Footer';
import { Form } from './Form'
import { ToDoItem } from './ToDoItem'
import { TodoList } from './TodoList'
import React, { ReactElement, useState, ChangeEvent, FormEvent } from 'react'

interface TodoItem{
    name: string;
    status: boolean;
}
export const Todo = () => {
    const [todos,setTodos] = useState<TodoItem[]>([])

    const completedTodos=(todos.filter((todo)=>todo.status).length)
    
    const unCompletedTodos=(todos.length - completedTodos)
    
    console.log(unCompletedTodos,completedTodos)
    return (
        
        <>
            <div>
             <Form  todos={todos} setTodos={setTodos}/>
             <TodoList todos={todos} setTodos={setTodos}/>
             <Footer completedTodos={completedTodos} unCompletedTodos={unCompletedTodos}/>
            </div>
        </>

    )
}