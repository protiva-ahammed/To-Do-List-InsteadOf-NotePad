import styles from './todoitem.module.css'
import { useState } from 'react'
interface TodoItem {
    name: string;
    status: boolean;
}
interface ToDoItemProps {
    item: TodoItem | null | undefined;
    todos: TodoItem[];
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}


export const ToDoItem: React.FC<ToDoItemProps> = ({ item,todos, setTodos }) => {
    // const [item, setItem] = useState<TodoItem>();
    const handleDelete = (clickedItem: TodoItem) => {
        console.log('delete button clicked', clickedItem)
        setTodos(todos.filter((todo) => todo.name !== clickedItem.name))//it will filter away the items without the user clicked so it will return the new array without that perticular element and then saving it in setTodos array

    }
    const handleClicked = (clickedItem: TodoItem) => {
        console.log('Item clicked', clickedItem)
        const newTodos = todos.map((todo) =>
            todo.name === clickedItem.name ? { ...todo, status: !todo.status } : todo)
        setTodos(newTodos)
    }

    const completedClass = item?.status? styles.completedTask:""

    if (item === undefined) return (<><div>item undefined</div></>);
    return (
    
    <>
        <div>
            <div className={styles.todoItem}>
                <div className={styles.todoItemName}>
                    <span className={completedClass} onClick={() => item && handleClicked(item)}>
                    {item?.name}
                    </span>
                    <span>
                        <button className={styles.deleteButton} onClick={() => item && handleDelete(item)}>
                            x
                        </button>
                    </span>
                </div>

                <hr className={styles.line} />

            </div>

        </div>


    </>)
}