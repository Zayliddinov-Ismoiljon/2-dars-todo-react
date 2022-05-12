import { useState } from 'react';
import './App.css';

import TodoItem from './Component/TodoItem';

function App() {
	const [todos, setTodos] = useState(
		JSON.parse(window.localStorage.getItem('todos')) || [],
	);

	// console.log(todos);

	const hendlInput = (evt) => {
		const newTodo = {
			id: todos[todos.length - 1]?.id + 1 || 0,
			title: evt.target.value,
			isComplated: false,
		};

		if (evt.code === 'Enter') {
			evt.target.value = null;
			window.localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
			setTodos([...todos, newTodo]);
		}
	};

	const handlDeleteTodo = (evt) => {
		const deletedTodoId = evt.target.dataset.todoId - 0;

		const filteredTodos = todos.filter((item) => item.id !== deletedTodoId);
		window.localStorage.setItem('todos', JSON.stringify(filteredTodos));

		setTodos(filteredTodos);
	};

	const handlComplated = (evt) => {
		const complatedId = evt.target.dataset.todoId - 0;

		const findedItem = todos.find((item) => item.id === complatedId);

		findedItem.isComplated = !findedItem.isComplated;

		window.localStorage.setItem('todos', JSON.stringify(todos));

		// console.log(todos);

		setTodos([...todos]);
	};

	return (
		<>
			<div className='todo'>
				<input
					className='input'
					onKeyUp={hendlInput}
					type={'text'}
					placeholder='todo...'
				/>

				<ul className='list'>
					{todos.map((item) => (
						<TodoItem
							isComplated={item.isComplated}
							handlComplated={handlComplated}
							handlDeleteTodo={handlDeleteTodo}
							key={item.id}
							props={item}
						/>
					))}
				</ul>
			</div>
		</>
	);

}




export default App;
