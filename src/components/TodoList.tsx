import { ToDoItem } from "./ToDoItem"
import styles from "./todo.module.css"

interface TodoItem{
    name:string;
    status:boolean;
}

interface TodoListProps{
    todos: TodoItem[] | undefined | null;
    setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

export const TodoList: React.FC<TodoListProps> = ({todos,setTodos}) => {
    const sortedTodos = todos?.slice().sort((a,b)=>Number(a.status)-Number(b.status))
    if(!todos) return (<div>No entry</div>);
    return (
        <>
            <div className={styles.todolist}>
                {
                    sortedTodos?.map((item,index) => (
                        <ToDoItem key={index} item={item} todos={todos} setTodos={setTodos} />
                    ))
                }
            </div>
        </>
    )
}