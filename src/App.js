import {useState} from 'react';
import './App.css';

import TodoItem from './Component/TodoItem';

function App() {

  const [todos, setTodos]=useState([
    {id:1, title:"kod yozmadim",isComplated: false,},
    {id:2, title:"kod yozdim",isComplated: false,},
    {id:3, title:"kitob o'qidim",isComplated: false,}
  ])

  const [value, setValue]=useState("nimadir");

  // console.log(todos);

  const hendlInput=(evt)=>{

    const newTodo={
      id:todos[todos.length-1]?.id + 1 || 0,
      title:evt.target.value,
      isComplated:false,
    }

    

    if(evt.code==="Enter"){
      setTodos([...todos, newTodo])
    }
  }

  const changeValue=(evt)=>{
    return setValue(evt.target.value)
  }

  const handlDeleteTodo=(evt)=>{
    const deletedTodoId = (evt.target.dataset.todoId)-0;

    const filteredTodos=todos.filter(item=>item.id !== deletedTodoId);

    console.log(filteredTodos);

    setTodos(filteredTodos)
  }

  return (
    <>
      <div className='todo'>
      <input className='input' onKeyUp={hendlInput} type={"text"} placeholder="todo..."/>

      <ul className='list'>
        {
          todos.map(item=>(
            <TodoItem handlDeleteTodo={handlDeleteTodo} key={item.id} props={item}/>
          ))
        }
      </ul>
      </div>

    </>
  );
}

export default App;
