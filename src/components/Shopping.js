import React from 'react';
import ShoppingTodos from './ShoppingTodos';

const todos = ["ipad", "macbook", "airpod"];

const Shopping = () => {
	return <div>
		<ShoppingTodos items={todos} />

	</div>
}

export default Shopping;