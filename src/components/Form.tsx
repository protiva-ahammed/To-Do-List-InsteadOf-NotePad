
import React, { ReactElement, useState, ChangeEvent, FormEvent } from 'react'
import styles from './form.module.css'


interface TodoItem{
    name:string;
    status:boolean;
}

interface FormProps {
    todos: TodoItem[];
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

export const Form: React.FC<FormProps> = ({todos, setTodos }) => {
    const [todoName,setTodoName] = useState('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoName( e.target.value)
    }

    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!todoName.trim()) return;
        setTodos(prevTodos=>[
            ...prevTodos,
           { name:todoName,
            status:false

    }])
        // console.log(todos) async calling
        setTodoName('')
    }

    const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
        }

    }
    return (
        <>
            <div>
                < form className={styles.todoform} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <input className={styles.modifyInput}
                            type='text' 
                            onChange={handleInputChange} 
                            onKeyDown={handlePressEnter} 
                            value={todoName} 
                            placeholder='Work to do'
                        >
                        </input>
                        <button className={styles.modifyButton} type="submit">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}