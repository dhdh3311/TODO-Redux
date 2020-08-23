import React, { useState } from 'react';
import ShoppingTodos from './ShoppingTodos';

//const todos = ["ipad", "macbook", "airpod"];



let newTodo = "";

const todoChanges = (todo) => {
	newTodo = todo;
	console.log("변화" + newTodo);
}

const addTodo = () => {
	console.log("addItem 버튼 클릭");

	//setState
}

const Shopping = () => {

	const [todos, setTodos] = useState([]);

	return <div>
		<label>
			<input type="text" onChange={todoChanges(this.value)} />
			<input type="button" value="add" onClick={addTodo} />
		</label>

		<ShoppingTodos items={todos} />
	</div>
}

export default Shopping;