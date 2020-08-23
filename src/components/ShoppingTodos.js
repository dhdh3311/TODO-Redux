import React from 'react';

const ShoppingTodos = (props) => {

	const itemList = props.items.map((item) => (<div>{item}</div>));
	return <div>
		{itemList}
	</div>

}

export default ShoppingTodos;