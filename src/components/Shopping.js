import React from 'react';
import ShoppingTodos from 'ShoppingTodos';

list = ["ipad", "macbook", "airpod"];

const Shopping = () => {
	return <div>
		<ShoppingTodos items={list} />

	</div>
}

export default Shopping;