import React from 'react';

const ShoppingTodos = (props) => {

	const itemList = props.items.map((item) => (<li>{item}</li>));
	return <div>
		{itemList}
	</div>
}

export default ShoppingTodos;