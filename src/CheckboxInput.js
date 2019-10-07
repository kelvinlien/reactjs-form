import React from 'react';
class CheckboxInput extends React.Component
//Usage: for every checkbox in the form
{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return(
			<>
			<input type = 'checkbox' 
			value = {this.props.value} 
			name = {this.props.name} 
			id = {this.props.id} 
			onClick = {this.props.onClick} 
			className = {this.props.inputClass}/>
			<label htmlFor = {this.props.id} 
			className = {this.props.labelClass}>{this.props.innerHtml}</label>
			</>
			);
	}
}
export default CheckboxInput;