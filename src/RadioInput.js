import React from 'react';
class RadioInput extends React.Component{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return(
			<input type = 'radio' value = {props.value} name = {props.name} id = {props.id} onClick = {props.onClick} className = {props.inputClass}/>
			<label htmlFor = {props.name} className = {props.labelClass}>{props.innerHtml}</label>
			);
	}
}