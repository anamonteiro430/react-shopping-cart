import React from 'react';

const Item = props => {
	return (
		<div className='shopping-cart_item'>
			<p>{props.key}</p>
			<img src={props.image} alt={`${props.title} book`} />

			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => props.removeItem(props.title)}>Remove</button>
			</div>
		</div>
	);
};

export default Item;
