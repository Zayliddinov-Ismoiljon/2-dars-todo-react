

import "./todoitem.css";

const TodoItem=({handlDeleteTodo,props})=>{

    const {title, id}=props

    return(
        
        <>
            <li className="item">
                <strong>{title}</strong>
                <button className="btn" onClick={handlDeleteTodo} data-todo-id={id} type="button">Delete</button>
            </li>
        </>
    )
}

export default TodoItem;