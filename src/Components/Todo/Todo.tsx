import React, {useState} from "react";
import s from '../Todo/Todo.module.css'

function Todo() {
    let [todo, setTodo] = useState(
        [
            {id: 1, n: "work", p: "hight"}, {id: 2, n: "anime", p: "low"}, {id: 3, n: "games", p: "middle"},
            {id: 4, n: "react", p: "hight"},
            {id: 5, n: "html", p: "low"}
        ]
    )

    const deleteTask = (id:number) => {
        let filteredTask = todo.filter(t => t.id !== id)
        setTodo(filteredTask)
    }
    return (
        <div className={s.container}>
            <ul>
                {todo.map(t => {
                    if (t.p === "hight") {
                        return <li key={t.id}>
                            {t.n}
                            <span>{t.p}</span>
                            <button onClick={() => {deleteTask(t.id)}}>x</button>
                        </li>
                    }


                })}
            </ul>
        </div>
    )
}

export default Todo