

import "./todoitem.css";

const TodoItem=({handlDeleteTodo,props,handlComplated})=>{

    const {title, id, isComplated}=props;

    return(
        
        <>
            <li className="item">
                <input checked={isComplated} data-todo-id={id} onChange={handlComplated} type="checkbox"/>
                <strong className={isComplated ? "completed" : ""}>{title}</strong>
                <button className="btn" onClick={handlDeleteTodo} data-todo-id={id} type="button">Delete</button>
            </li>
        </>
    )
}

export default TodoItem;