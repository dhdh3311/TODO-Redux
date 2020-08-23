import React from 'react';
import 'ShoppingTodos' from './ShppingTodos.js';

list = ["ipad", "macbook", "airpod"];

const Shopping = () => {
	return <div>
		<ShoppingTodos items={list} />

	</div>
}

export default Shopping;