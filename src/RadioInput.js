import React from 'react';
class RadioInput extends React.Component
//Usage: for every radio in the form
{
	render()
	{
		return(
			<>
			<input type = 'radio' 
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
export default RadioInput;