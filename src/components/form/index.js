import React from "react";

export const Search = props => (
	<input type="search"
		placeholder={props.placeholder}
		onChange={props.onChange}
	/>
)

export const Button = props => (
	<Button>
		{props.text}
	</Button>
)