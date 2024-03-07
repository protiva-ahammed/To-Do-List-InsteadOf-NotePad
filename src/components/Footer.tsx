import styles from './footer.module.css'
interface FooterProps {
    completedTodos: number;
    unCompletedTodos: number;
}


export const Footer: React.FC<FooterProps> = ({ completedTodos, unCompletedTodos }) => {
    console.log(completedTodos, unCompletedTodos)
    return (<div className={styles.footer}>
        <span className={styles.item}>
            Well done for {completedTodos} work👏
        </span>
        <span>{completedTodos}-{unCompletedTodos}</span>
        <span className={styles.item}>
            Fighting {unCompletedTodos} with tasks more🔥
        </span>
    </div>)
}